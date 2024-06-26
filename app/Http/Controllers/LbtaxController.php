<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateLbtaxRequest;
use App\Http\Requests\UpdateLbtaxRequest;
use App\Http\Controllers\AppBaseController;
use App\Repositories\LbtaxRepository;
use Illuminate\Http\Request;
use Flash;

class LbtaxController extends AppBaseController
{
    /** @var LbtaxRepository $lbtaxRepository*/
    private $lbtaxRepository;

    public function __construct(LbtaxRepository $lbtaxRepo)
    {
        $this->lbtaxRepository = $lbtaxRepo;
    }

    /**
     * Display a listing of the Lbtax.
     */
    public function index()
    {
        return view('lbtaxs.index');
    }

    /**
     * Show the form for creating a new Lbtax.
     */
    public function create()
    {
        return view('lbtaxs.create');
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        $lbtaxs = $this->lbtaxRepository->all($searchData);

        return view("lbtaxs.table", [
            "lbtaxs" => $lbtaxs,
            "page" => $request->input("page", 0)
        ]);
    }

    /**
     * Store a newly created Lbtax in storage.
     */
    public function store(CreateLbtaxRequest $request)
    {
        $input = $request->all();

        /** @var Lbtax $lbtax */
        $lbtax = $this->lbtaxRepository->create($input);

        if($lbtax){
            return response()->json('Registro criado com sucesso', 200);
        }
        
        return response()->json('Erro ao criar registro', 500);
    }

    /**
     * Display the specified Lbtax.
     */
    public function show($id)
    {
        /** @var Lbtax $lbtax */
        $lbtax = $this->lbtaxRepository->find($id);

        if(!$lbtax){
            return response()->json('Registro não encontrado', 500);
        }

        return view('lbtaxs.show')->with('lbtax', $lbtax);
    }

    /**
     * Show the form for editing the specified Lbtax.
     */
    public function edit($id)
    {
        /** @var Lbtax $lbtax */
        $lbtax = $this->lbtaxRepository->find($id);

        if(!$lbtax){
            return response()->json('Registro não encontrado', 500);
        }

        return view('lbtaxs.edit')->with('lbtax', $lbtax);
    }

    /**
     * Update the specified Lbtax in storage.
     */
    public function update($id, UpdateLbtaxRequest $request)
    {
        /** @var Lbtax $lbtax */
        $lbtax = $this->lbtaxRepository->find($id);

        if(!$lbtax){
            return response()->json('Registro não encontrado', 500);
        }

        $this->lbtaxRepository->update($lbtax, $request->all());
        return response()->json('Registro atualizado com sucesso', 200);
    }

    /**
     * Remove the specified Lbtax from storage.
     *
     * @throws \Exception
     */
    public function destroy($id)
    {
        /** @var Lbtax $lbtax */
        $lbtax = $this->lbtaxRepository->find($id);

        if(!$lbtax){
            return response()->json('Registro não encontrado', 500);
        }

        $lbtax->delete();

        return response()->json('Registro deletado com sucesso', 200);
    }
}
