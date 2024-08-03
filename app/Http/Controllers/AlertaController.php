<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateAlertaRequest;
use App\Http\Requests\UpdateAlertaRequest;
use App\Http\Controllers\AppBaseController;
use App\Repositories\AlertaRepository;
use Illuminate\Http\Request;
use Flash;

class AlertaController extends AppBaseController
{
    /** @var AlertaRepository $alertaRepository*/
    private $alertaRepository;

    public function __construct(AlertaRepository $alertaRepo)
    {
        $this->alertaRepository = $alertaRepo;
    }

    /**
     * Display a listing of the Alerta.
     */
    public function index()
    {
        return view('alertas.index');
    }

    /**
     * Show the form for creating a new Alerta.
     */
    public function create()
    {
        return view('alertas.create');
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        $alertas = $this->alertaRepository->all($searchData);

        return view("alertas.table", [
            "alertas" => $alertas,
            "page" => $request->input("page", 0)
        ]);
    }

    /**
     * Store a newly created Alerta in storage.
     */
    public function store(CreateAlertaRequest $request)
    {
        $input = $request->all();

        /** @var Alerta $alerta */
        $alerta = $this->alertaRepository->create($input);

        if($alerta){
            return response()->json('Registro criado com sucesso', 200);
        }
        
        return response()->json('Erro ao criar registro', 500);
    }

    /**
     * Display the specified Alerta.
     */
    public function show($id)
    {
        /** @var Alerta $alerta */
        $alerta = $this->alertaRepository->find($id);

        if(!$alerta){
            return response()->json('Registro não encontrado', 500);
        }

        return view('alertas.show')->with('alerta', $alerta);
    }

    /**
     * Show the form for editing the specified Alerta.
     */
    public function edit($id)
    {
        /** @var Alerta $alerta */
        $alerta = $this->alertaRepository->find($id);

        if(!$alerta){
            return response()->json('Registro não encontrado', 500);
        }

        return view('alertas.edit')->with('alerta', $alerta);
    }

    /**
     * Update the specified Alerta in storage.
     */
    public function update($id, UpdateAlertaRequest $request)
    {
        /** @var Alerta $alerta */
        $alerta = $this->alertaRepository->find($id);

        if(!$alerta){
            return response()->json('Registro não encontrado', 500);
        }

        $this->alertaRepository->update($alerta, $request->all());
        return response()->json('Registro atualizado com sucesso', 200);
    }

    /**
     * Remove the specified Alerta from storage.
     *
     * @throws \Exception
     */
    public function destroy($id)
    {
        /** @var Alerta $alerta */
        $alerta = $this->alertaRepository->find($id);

        if(!$alerta){
            return response()->json('Registro não encontrado', 500);
        }

        $alerta->delete();

        return response()->json('Registro deletado com sucesso', 200);
    }
}
