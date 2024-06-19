<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTabelaRequest;
use App\Http\Requests\UpdateTabelaRequest;
use App\Repositories\AbstractCrudRepository;
use App\Repositories\TabelaRepository;
use Illuminate\Http\Request;
use Flash;

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
        return view('tabelas.create');
    }

    /**
     * Store a newly created Tabela in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();

        if(isset($input["id"])){
            $tabela = $this->tabelaRepository->find($input["id"]);
            $this->tabelaRepository->update($tabela,$input);
        }else{
            $tabela = $this->tabelaRepository->create($input);
        }

        if(!$tabela){
            return response()->json("Erro ao salvar registro.", 500);
        }

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

        return view('tabelas.edit', compact('tabela'));
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

        $this->tabelaRepository->update($tabela, $input);
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
}
