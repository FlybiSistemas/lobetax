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

    public function store(Request $request)
    {
        $input = $request->all();
        $coluna = $this->colunaRepository->create($input);

        if(!$coluna){
            return response()->json("Erro ao salvar registro.", 500);
        }

        return response()->json("Registro salvo com sucesso.", 200);
    }
}
