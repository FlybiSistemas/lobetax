<?php

namespace App\Http\Controllers;

use App\Helpers\FormatterHelper;
use App\Http\Requests\CreateParticipantesRequest;
use App\Http\Requests\UpdateParticipantesRequest;
use App\Http\Controllers\AppBaseController;
use App\Repositories\ParticipantesRepository;
use Illuminate\Http\Request;
use Flash;

class ParticipantesController extends AppBaseController
{
    /** @var ParticipantesRepository $participantesRepository*/
    private $participantesRepository;

    public function __construct(ParticipantesRepository $participantesRepo)
    {
        $this->participantesRepository = $participantesRepo;
    }

    /**
     * Display a listing of the Participantes.
     */
    public function index()
    {
        return view('participantes.index');
    }

    /**
     * Show the form for creating a new Participantes.
     */
    public function create()
    {
        return view('participantes.create');
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        $participantes = $this->participantesRepository->all($searchData);

        return view("participantes.table", [
            "participantes" => $participantes,
            "page" => $request->input("page", 0)
        ]);
    }

    /**
     * Store a newly created Participantes in storage.
     */
    public function store(CreateParticipantesRequest $request)
    {
        $input = $request->all();

        $input['cnpj'] = FormatterHelper::onlyNumbers($input['cnpj']);

        /** @var Participantes $participantes */
        $participantes = $this->participantesRepository->create($input);

        if($participantes){
            return response()->json('Registro criado com sucesso', 200);
        }
        
        return response()->json('Erro ao criar registro', 500);
    }

    /**
     * Display the specified Participantes.
     */
    public function show($id)
    {
        /** @var Participantes $participantes */
        $participante = $this->participantesRepository->find($id);

        if(!$participante){
            return response()->json('Registro não encontrado', 500);
        }

        return view('participantes.show')->with('participante', $participante);
    }

    /**
     * Show the form for editing the specified Participantes.
     */
    public function edit($id)
    {
        /** @var Participantes $participantes */
        $participante = $this->participantesRepository->find($id);

        if(!$participante){
            return response()->json('Registro não encontrado', 500);
        }

        return view('participantes.edit')->with('participante', $participante);
    }

    /**
     * Update the specified Participantes in storage.
     */
    public function update($id, UpdateParticipantesRequest $request)
    {
        /** @var Participantes $participantes */
        $participantes = $this->participantesRepository->find($id);

        if(!$participantes){
            return response()->json('Registro não encontrado', 500);
        }

        $this->participantesRepository->update($participantes, $request->all());
        return response()->json('Registro atualizado com sucesso', 200);
    }

    /**
     * Remove the specified Participantes from storage.
     *
     * @throws \Exception
     */
    public function destroy($id)
    {
        /** @var Participantes $participantes */
        $participantes = $this->participantesRepository->find($id);

        if(!$participantes){
            return response()->json('Registro não encontrado', 500);
        }

        $participantes->delete();

        return response()->json('Registro deletado com sucesso', 200);
    }
}
