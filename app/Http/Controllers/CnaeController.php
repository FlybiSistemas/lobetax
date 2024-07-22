<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCnaeRequest;
use App\Http\Requests\UpdateCnaeRequest;
use App\Http\Controllers\AppBaseController;
use App\Repositories\CnaeRepository;
use Illuminate\Http\Request;
use Flash;

class CnaeController extends AppBaseController
{
    /** @var CnaeRepository $cnaeRepository*/
    private $cnaeRepository;

    public function __construct(CnaeRepository $cnaeRepo)
    {
        $this->cnaeRepository = $cnaeRepo;
    }

    /**
     * Display a listing of the Cnae.
     */
    public function index()
    {
        return view('cnaes.index');
    }

    /**
     * Show the form for creating a new Cnae.
     */
    public function create()
    {
        return view('cnaes.create');
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        $cnaes = $this->cnaeRepository->all($searchData);

        return view("cnaes.table", [
            "cnaes" => $cnaes,
            "page" => $request->input("page", 0)
        ]);
    }

    /**
     * Store a newly created Cnae in storage.
     */
    public function store(CreateCnaeRequest $request)
    {
        $input = $request->all();

        /** @var Cnae $cnae */
        $cnae = $this->cnaeRepository->create($input);

        if($cnae){
            return response()->json('Registro criado com sucesso', 200);
        }
        
        return response()->json('Erro ao criar registro', 500);
    }

    /**
     * Display the specified Cnae.
     */
    public function show($id)
    {
        /** @var Cnae $cnae */
        $cnae = $this->cnaeRepository->find($id);

        if(!$cnae){
            return response()->json('Registro não encontrado', 500);
        }

        return view('cnaes.show')->with('cnae', $cnae);
    }

    /**
     * Show the form for editing the specified Cnae.
     */
    public function edit($id)
    {
        /** @var Cnae $cnae */
        $cnae = $this->cnaeRepository->find($id);

        if(!$cnae){
            return response()->json('Registro não encontrado', 500);
        }

        return view('cnaes.edit')->with('cnae', $cnae);
    }

    /**
     * Update the specified Cnae in storage.
     */
    public function update($id, UpdateCnaeRequest $request)
    {
        /** @var Cnae $cnae */
        $cnae = $this->cnaeRepository->find($id);

        if(!$cnae){
            return response()->json('Registro não encontrado', 500);
        }

        $this->cnaeRepository->update($cnae, $request->all());
        return response()->json('Registro atualizado com sucesso', 200);
    }

    /**
     * Remove the specified Cnae from storage.
     *
     * @throws \Exception
     */
    public function destroy($id)
    {
        /** @var Cnae $cnae */
        $cnae = $this->cnaeRepository->find($id);

        if(!$cnae){
            return response()->json('Registro não encontrado', 500);
        }

        $cnae->delete();

        return response()->json('Registro deletado com sucesso', 200);
    }
}
