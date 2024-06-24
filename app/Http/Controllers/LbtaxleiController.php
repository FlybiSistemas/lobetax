<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateLbtaxleiRequest;
use App\Http\Requests\UpdateLbtaxleiRequest;
use App\Http\Controllers\AppBaseController;
use App\Repositories\LbtaxleiRepository;
use Illuminate\Http\Request;
use Flash;

class LbtaxleiController extends AppBaseController
{
    /** @var LbtaxleiRepository $lbtaxleiRepository*/
    private $lbtaxleiRepository;

    public function __construct(LbtaxleiRepository $lbtaxleiRepo)
    {
        $this->lbtaxleiRepository = $lbtaxleiRepo;
    }

    /**
     * Display a listing of the Lbtaxlei.
     */
    public function index()
    {
        return view('lbtaxleis.index');
    }

    /**
     * Show the form for creating a new Lbtaxlei.
     */
    public function create()
    {
        return view('lbtaxleis.create');
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        $lbtaxleis = $this->lbtaxleiRepository->all($searchData);

        return view("lbtaxleis.table", [
            "lbtaxleis" => $lbtaxleis,
            "page" => $request->input("page", 0)
        ]);
    }

    /**
     * Store a newly created Lbtaxlei in storage.
     */
    public function store(CreateLbtaxleiRequest $request)
    {
        $input = $request->all();

        /** @var Lbtaxlei $lbtaxlei */
        $lbtaxlei = $this->lbtaxleiRepository->create($input);

        if($lbtaxlei){
            return response()->json('Registro criado com sucesso', 200);
        }
        
        return response()->json('Erro ao criar registro', 500);
    }

    /**
     * Display the specified Lbtaxlei.
     */
    public function show($id)
    {
        /** @var Lbtaxlei $lbtaxlei */
        $lbtaxlei = $this->lbtaxleiRepository->find($id);

        if(!$lbtaxlei){
            return response()->json('Registro não encontrado', 500);
        }

        return view('lbtaxleis.show')->with('lbtaxlei', $lbtaxlei);
    }

    /**
     * Show the form for editing the specified Lbtaxlei.
     */
    public function edit($id)
    {
        /** @var Lbtaxlei $lbtaxlei */
        $lbtaxlei = $this->lbtaxleiRepository->find($id);

        if(!$lbtaxlei){
            return response()->json('Registro não encontrado', 500);
        }

        return view('lbtaxleis.edit')->with('lbtaxlei', $lbtaxlei);
    }

    /**
     * Update the specified Lbtaxlei in storage.
     */
    public function update($id, UpdateLbtaxleiRequest $request)
    {
        /** @var Lbtaxlei $lbtaxlei */
        $lbtaxlei = $this->lbtaxleiRepository->find($id);

        if(!$lbtaxlei){
            return response()->json('Registro não encontrado', 500);
        }

        $this->lbtaxleiRepository->update($lbtaxlei, $request->all());
        return response()->json('Registro atualizado com sucesso', 200);
    }

    /**
     * Remove the specified Lbtaxlei from storage.
     *
     * @throws \Exception
     */
    public function destroy($id)
    {
        /** @var Lbtaxlei $lbtaxlei */
        $lbtaxlei = $this->lbtaxleiRepository->find($id);

        if(!$lbtaxlei){
            return response()->json('Registro não encontrado', 500);
        }

        $lbtaxlei->delete();

        return response()->json('Registro deletado com sucesso', 200);
    }
}
