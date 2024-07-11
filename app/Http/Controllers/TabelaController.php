<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTabelaRequest;
use App\Http\Requests\UpdateTabelaRequest;
use App\Models\Coluna;
use App\Repositories\AbstractCrudRepository;
use App\Repositories\TabelaRepository;
use Illuminate\Http\Request;
use Flash;
use Illuminate\Support\Facades\DB;

class TabelaController extends Controller
{
    /** @var TabelaRepository $tabelaRepository*/
    private $tabelaRepository;

    public function __construct(TabelaRepository $tabelaRepo)
    {
        $this->tabelaRepository = $tabelaRepo;
    }

    /**
     * Display a listing of the Tabela.
     */
    public function index()
    {
        return view('tabelas.index');
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        $tabelas = $this->tabelaRepository->all($searchData);

        return view("tabelas.table", [
            "tabelas" => $tabelas,
            "page" => $request->input("page", 0)
        ]);
    }

    /**
     * Show the form for creating a new Tabela.
     */
    public function create()
    {
        $colunas = Coluna::all();
        return view('tabelas.create', compact('colunas'));
    }

    /**
     * Store a newly created Tabela in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();

        DB::beginTransaction();
        $tabela = $this->tabelaRepository->create($input);

        try{
            if(count($input['coluna']) > 0){
                $tabela->colunas()->detach();
                foreach($input['coluna'] as $index => $coluna){
                    $tabela->colunas()->attach([$coluna], ['ordem' => $index]);
                }
            }
        }
        catch(\Exception $e){
            DB::rollBack();
            return response()->json($e->getMessage(), 500);
        }


        if(!$tabela){
            DB::rollBack();
            return response()->json("Erro ao salvar registro.", 500);
        }
        DB::commit();

        return response()->json("Registro salvo com sucesso.", 200);
    }

    /**
     * Display the specified Tabela.
     */
    public function show($id)
    {
        $tabela = $this->tabelaRepository->find($id);

        if (empty($tabela)) {
            Flash::error('Tabela not found');

            return redirect(route('tabelas.index'));
        }

        return view('tabelas.show')->with('tabela', $tabela);
    }

    /**
     * Show the form for editing the specified Tabela.
     */
    public function edit($id)
    {
        $tabela = $this->tabelaRepository->find($id);

        if(!$tabela){
            return response()->json('Tabela não encontrada', 500);
        }

        $colunasTabela = $tabela->colunas()->withPivot('ordem')->orderBy('pivot_ordem')->get();

        $colunas = Coluna::all();
        return view('tabelas.edit', compact('tabela', 'colunas', 'colunasTabela'));
    }

    /**
     * Update the specified Tabela in storage.
     */
    public function update($id, Request $request)
    {
        $tabela = $this->tabelaRepository->find($id);

        if(!$tabela){
            return response()->json('Tabela não encontrada', 500);
        }

        $input = $request->all();
        DB::beginTransaction();
        $this->tabelaRepository->update($tabela, $input);
        if(isset($input['coluna'])){
            $tabela->colunas()->detach();
            foreach($input['coluna'] as $index => $coluna){
                $tabela->colunas()->attach([$coluna], ['ordem' => $index]);
            }
        }
        else{
            $tabela->colunas()->detach();
        }
        DB::commit();
        if(!$tabela){
            return response()->json('Erro ao atualizar registro', 500);
        }
        return response()->json('Tabela atualizada com sucesso');
    }

    /**
     * Remove the specified Tabela from storage.
     *
     * @throws \Exception
     */
    public function destroy($id)
    {
        $tabela = $this->tabelaRepository->find($id);
        if (!$tabela) {
            return response()->json("Registro não encontrado.", 500);
        }
        $this->tabelaRepository->delete($tabela);
        return $id;
    }

    public function ordenaColunas(Request $request)
    {
        $input = $request->all();
        $tabela = $this->tabelaRepository->find($input['tabela_id']);
        if(!$tabela){
            return response()->json("Tabela não encontrada.", 500);
        }
        $tabela->colunas()->detach();

        foreach($input['colunas'] as $index => $coluna){
            $tabela->colunas()->attach([$coluna], ['ordem' => $index]);
        }

        return response()->json("Colunas ordenadas com sucesso.", 200);
    }
}
