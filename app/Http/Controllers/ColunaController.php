<?php

namespace App\Http\Controllers;

use App\Repositories\ColunaRepository;
use Illuminate\Http\Request;

class ColunaController extends Controller
{
    private $colunaRepository;

    public function __construct(
        ColunaRepository     $colunaRepo,
    ) {
        $this->colunaRepository = $colunaRepo;
    }

    public function index(){
        return view('colunas.index');
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        $colunas = $this->colunaRepository->all($searchData);

        return view("colunas.table", [
            "colunas" => $colunas,
            "page" => $request->input("page", 0)
        ]);
    }

    public function create()
    {
        return view("colunas.create");
    }

    public function edit($id){
        $coluna = $this->colunaRepository->find($id);

        return view("colunas.edit", [
            "coluna" => $coluna
        ]);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $coluna = $this->colunaRepository->create($input);

        if(!$coluna){
            return response()->json("Erro ao salvar registro.", 500);
        }

        return response()->json("Registro salvo com sucesso.", 200);
    }

    public function update($id, Request $request)
    {
        $input = $request->all();
        $coluna = $this->colunaRepository->find($id);

        if(!$coluna){
            return response()->json("Registro não encontrado.", 500);
        }
        $this->colunaRepository->update($coluna, $input);

        return response()->json("Registro atualizado com sucesso.", 200);
    }

    public function destroy($id)
    {
        $coluna = $this->colunaRepository->find($id);
        if (!$coluna) {
            return response()->json("Registro não encontrado.", 500);
        }
        $this->colunaRepository->delete($coluna);
        return $id;
    }
}
