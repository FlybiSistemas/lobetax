<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateNcmRequest;
use App\Http\Requests\UpdateNcmRequest;
use App\Http\Controllers\AppBaseController;
use App\Models\Cnae;
use App\Repositories\NcmRepository;
use Illuminate\Http\Request;
use Flash;

class NcmController extends AppBaseController
{
    /** @var NcmRepository $ncmRepository*/
    private $ncmRepository;

    public function __construct(NcmRepository $ncmRepo)
    {
        $this->ncmRepository = $ncmRepo;
    }

    /**
     * Display a listing of the Ncm.
     */
    public function index()
    {
        return view('ncms.index');
    }

    /**
     * Show the form for creating a new Ncm.
     */
    public function create()
    {
        $cnaes = Cnae::all();
        return view('ncms.create', compact('cnaes'));
    }

    /**
     * Show the form for creating a new Ncm.
     */
    public function createByAlerta($codigo)
    {
        $cnaes = Cnae::all();
        return view('ncms.create', compact('cnaes', 'codigo'));
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        $ncms = $this->ncmRepository->all($searchData);

        return view("ncms.table", [
            "ncms" => $ncms,
            "page" => $request->input("page", 0)
        ]);
    }

    /**
     * Store a newly created Ncm in storage.
     */
    public function store(CreateNcmRequest $request)
    {
        $input = $request->all();

        /** @var Ncm $ncm */
        $ncm = $this->ncmRepository->create($input);

        if($ncm){
            if(isset($request->cnae)) {
                $ncm->cnaes()->attach($request->cnae);
            }

            return response()->json('Registro criado com sucesso', 200);
        }
        
        return response()->json('Erro ao criar registro', 500);
    }

    /**
     * Display the specified Ncm.
     */
    public function show($id)
    {
        /** @var Ncm $ncm */
        $ncm = $this->ncmRepository->find($id);

        if(!$ncm){
            return response()->json('Registro não encontrado', 500);
        }

        return view('ncms.show')->with('ncm', $ncm);
    }

    /**
     * Show the form for editing the specified Ncm.
     */
    public function edit($id)
    {
        /** @var Ncm $ncm */
        $ncm = $this->ncmRepository->find($id);

        if(!$ncm){
            return response()->json('Registro não encontrado', 500);
        }

        $cnaes = Cnae::all();

        return view('ncms.edit', compact('ncm', 'cnaes'));
    }

    /**
     * Update the specified Ncm in storage.
     */
    public function update($id, UpdateNcmRequest $request)
    {
        /** @var Ncm $ncm */
        $ncm = $this->ncmRepository->find($id);

        if(!$ncm){
            return response()->json('Registro não encontrado', 500);
        }

        $ncm->cnaes()->detach();
        if(isset($request->cnae)) {
            $ncm->cnaes()->attach($request->cnae);
        }

        $this->ncmRepository->update($ncm, $request->all());
        return response()->json('Registro atualizado com sucesso', 200);
    }

    /**
     * Remove the specified Ncm from storage.
     *
     * @throws \Exception
     */
    public function destroy($id)
    {
        /** @var Ncm $ncm */
        $ncm = $this->ncmRepository->find($id);

        if(!$ncm){
            return response()->json('Registro não encontrado', 500);
        }

        $ncm->delete();

        return response()->json('Registro deletado com sucesso', 200);
    }
}
