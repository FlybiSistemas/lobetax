<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateLbtaxufRequest;
use App\Http\Requests\UpdateLbtaxufRequest;
use App\Http\Controllers\AppBaseController;
use App\Repositories\LbtaxufRepository;
use Illuminate\Http\Request;
use Flash;

class LbtaxufController extends AppBaseController
{
    /** @var LbtaxufRepository $lbtaxufRepository*/
    private $lbtaxufRepository;

    public function __construct(LbtaxufRepository $lbtaxufRepo)
    {
        $this->lbtaxufRepository = $lbtaxufRepo;
    }

    /**
     * Display a listing of the Lbtaxuf.
     */
    public function index(Request $request)
    {
        return view('lbtaxufs.index');
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        $lbtaxufs = $this->lbtaxufRepository->all($searchData);

        return view("lbtaxufs.table", [
            "lbtaxufs" => $lbtaxufs,
            "page" => $request->input("page", 0)
        ]);
    }

    /**
     * Show the form for creating a new Lbtaxuf.
     */
    public function create()
    {
        return view('lbtaxufs.create');
    }

    /**
     * Store a newly created Lbtaxuf in storage.
     */
    public function store(CreateLbtaxufRequest $request)
    {
        $input = $request->all();

        $lbtaxuf = $this->lbtaxufRepository->create($input);
        if($lbtaxuf){
            return response()->json('Registro salvo com sucesso.');
        }
        
        return response()->json('Erro ao salvar registro.');
    }

    /**
     * Display the specified Lbtaxuf.
     */
    public function show($id)
    {
        $lbtaxuf = $this->lbtaxufRepository->find($id);

        if (empty($lbtaxuf)) {
            Flash::error('Lbtaxuf not found');

            return redirect(route('lbtaxufs.index'));
        }

        return view('lbtaxufs.show')->with('lbtaxuf', $lbtaxuf);
    }

    /**
     * Show the form for editing the specified Lbtaxuf.
     */
    public function edit($id)
    {
        $lbtaxuf = $this->lbtaxufRepository->find($id);

        if (empty($lbtaxuf)) {
            Flash::error('Lbtaxuf not found');

            return redirect(route('lbtaxufs.index'));
        }

        return view('lbtaxufs.edit')->with('lbtaxuf', $lbtaxuf);
    }

    /**
     * Update the specified Lbtaxuf in storage.
     */
    public function update($id, UpdateLbtaxufRequest $request)
    {
        $lbtaxuf = $this->lbtaxufRepository->find($id);

        if (empty($lbtaxuf)) {
            Flash::error('Lbtaxuf not found');

            return redirect(route('lbtaxufs.index'));
        }

        $lbtaxuf = $this->lbtaxufRepository->update($request->all(), $id);

        Flash::success('Lbtaxuf updated successfully.');

        return redirect(route('lbtaxufs.index'));
    }

    /**
     * Remove the specified Lbtaxuf from storage.
     *
     * @throws \Exception
     */
    public function destroy($id)
    {
        $lbtaxuf = $this->lbtaxufRepository->find($id);

        if (empty($lbtaxuf)) {
            Flash::error('Lbtaxuf not found');

            return redirect(route('lbtaxufs.index'));
        }

        $this->lbtaxufRepository->delete($id);

        Flash::success('Lbtaxuf deleted successfully.');

        return redirect(route('lbtaxufs.index'));
    }
}
