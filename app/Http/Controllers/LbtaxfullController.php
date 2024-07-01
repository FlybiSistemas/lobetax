<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateLbtaxfullRequest;
use App\Http\Requests\UpdateLbtaxfullRequest;
use App\Http\Controllers\AppBaseController;
use App\Repositories\LbtaxfullRepository;
use Illuminate\Http\Request;
use Flash;

class LbtaxfullController extends AppBaseController
{
    /** @var LbtaxfullRepository $lbtaxfullRepository*/
    private $lbtaxfullRepository;

    public function __construct(LbtaxfullRepository $lbtaxfullRepo)
    {
        $this->lbtaxfullRepository = $lbtaxfullRepo;
    }

    /**
     * Display a listing of the Lbtaxfull.
     */
    public function index()
    {
        return view('lbtaxfulls.index');
    }

    /**
     * Show the form for creating a new Lbtaxfull.
     */
    public function create()
    {
        return view('lbtaxfulls.create');
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        $lbtaxfulls = $this->lbtaxfullRepository->all($searchData);

        return view("lbtaxfulls.table", [
            "lbtaxfulls" => $lbtaxfulls,
            "page" => $request->input("page", 0)
        ]);
    }

    /**
     * Store a newly created Lbtaxfull in storage.
     */
    public function store(CreateLbtaxfullRequest $request)
    {
        $input = $request->all();

        /** @var Lbtaxfull $lbtaxfull */
        $lbtaxfull = $this->lbtaxfullRepository->create($input);

        if($lbtaxfull){
            return response()->json('Registro criado com sucesso', 200);
        }
        
        return response()->json('Erro ao criar registro', 500);
    }

    /**
     * Display the specified Lbtaxfull.
     */
    public function show($id)
    {
        /** @var Lbtaxfull $lbtaxfull */
        $lbtaxfull = $this->lbtaxfullRepository->find($id);

        if(!$lbtaxfull){
            return response()->json('Registro não encontrado', 500);
        }

        return view('lbtaxfulls.show')->with('lbtaxfull', $lbtaxfull);
    }

    /**
     * Show the form for editing the specified Lbtaxfull.
     */
    public function edit($id)
    {
        /** @var Lbtaxfull $lbtaxfull */
        $lbtaxfull = $this->lbtaxfullRepository->find($id);

        if(!$lbtaxfull){
            return response()->json('Registro não encontrado', 500);
        }

        return view('lbtaxfulls.edit')->with('lbtaxfull', $lbtaxfull);
    }

    /**
     * Update the specified Lbtaxfull in storage.
     */
    public function update($id, UpdateLbtaxfullRequest $request)
    {
        /** @var Lbtaxfull $lbtaxfull */
        $lbtaxfull = $this->lbtaxfullRepository->find($id);

        if(!$lbtaxfull){
            return response()->json('Registro não encontrado', 500);
        }

        $this->lbtaxfullRepository->update($lbtaxfull, $request->all());
        return response()->json('Registro atualizado com sucesso', 200);
    }

    /**
     * Remove the specified Lbtaxfull from storage.
     *
     * @throws \Exception
     */
    public function destroy($id)
    {
        /** @var Lbtaxfull $lbtaxfull */
        $lbtaxfull = $this->lbtaxfullRepository->find($id);

        if(!$lbtaxfull){
            return response()->json('Registro não encontrado', 500);
        }

        $lbtaxfull->delete();

        return response()->json('Registro deletado com sucesso', 200);
    }
}
