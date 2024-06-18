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
    public function store(CreateTabelaRequest $request)
    {
        $input = $request->all();

        $tabela = $this->tabelaRepository->create($input);

        Flash::success('Tabela saved successfully.');

        return redirect(route('tabelas.index'));
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

        if (empty($tabela)) {
            Flash::error('Tabela not found');

            return redirect(route('tabelas.index'));
        }

        return view('tabelas.edit')->with('tabela', $tabela);
    }

    /**
     * Update the specified Tabela in storage.
     */
    public function update($id, Request $request)
    {
        $tabela = $this->tabelaRepository->find($id);

        if (empty($tabela)) {
            Flash::error('Tabela not found');

            return redirect(route('tabelas.index'));
        }


        Flash::success('Tabela updated successfully.');

        return redirect(route('tabelas.index'));
    }

    /**
     * Remove the specified Tabela from storage.
     *
     * @throws \Exception
     */
    public function destroy($id)
    {
        $tabela = $this->tabelaRepository->find($id);

        if (empty($tabela)) {
            Flash::error('Tabela not found');

            return redirect(route('tabelas.index'));
        }

        $this->tabelaRepository->delete($id);

        Flash::success('Tabela deleted successfully.');

        return redirect(route('tabelas.index'));
    }
}
