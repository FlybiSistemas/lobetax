<?php

namespace App\Http\Controllers;

use App\Models\Coluna;
use App\Models\Referencia;
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

    public function searchModelFillable($model)
    {
        $modelClass = "\App\Models\\" . $model;
        $modelInstance = app($modelClass);

        // Obtenha os campos preenchíveis
        $fillables = $modelInstance->getFillable();

        return response()->json($fillables);
    }

    public function searchModelRelations($model)
    {
        $modelClass = "\App\Models\\" . $model;
        $reflectionClass = new \ReflectionClass($modelClass);
        $methods = $reflectionClass->getMethods();

        $relationshipMethods = [];
        foreach ($methods as $method) {
            if ($modelClass == "\\".str_replace("/", "\\",$method->class)) {
                $relationshipMethods[] = $method->name;
            }
        }

        return response()->json($relationshipMethods);
    }

    public function create()
    {
        $colunas = Coluna::all();
        $modelFiles = scandir(app_path('Models'));
        $modelsToUse = [];

        foreach ($modelFiles as $file) {
            if (strpos($file, '.php') !== false) {
                $modelName = str_replace('.php', '', $file);
                $modelsToUse[] = $modelName;
            }
        }
        return view("colunas.create", [
            "colunas" => $colunas,
            "modelsToUse" => $modelsToUse,
        ]);
    }

    public function edit($id){
        $coluna = $this->colunaRepository->find($id);
        $colunas = Coluna::all();
        $modelFiles = scandir(app_path('Models'));
        $modelsToUse = [];

        foreach ($modelFiles as $file) {
            if (strpos($file, '.php') !== false) {
                $modelName = str_replace('.php', '', $file);
                $modelsToUse[] = $modelName;
            }
        }

        return view("colunas.edit", [
            "coluna" => $coluna,
            "colunas" => $colunas,
            "modelsToUse" => $modelsToUse,
        ]);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $coluna = $this->colunaRepository->create($input);

        if(!$coluna){
            return response()->json("Erro ao salvar registro.", 500);
        }

        if($input['referenciax'] && count($input['referenciax']) > 0){
            $referencias_ids = [];
            foreach($input['referenciax'] as $item)
            {
                $referencia = Referencia::firstOrCreate([
                    'referencia' => $item['referencia'],
                ]);
                $referencias_ids[] = $referencia->id;
            }

            if(count($referencias_ids) > 0){
                $coluna->referencias()->sync($referencias_ids);
            }
        }

        return response()->json("Registro salvo com sucesso.", 200);
    }

    public function update($id, Request $request)
    {
        $input = $request->all();
        $coluna = $this->colunaRepository->find($id);

        if(!$coluna){
            return response()->json("Registro não encontrado.", 500);
        }
        $this->colunaRepository->update($coluna, $input);

        if(isset($input['referenciax']) && count($input['referenciax']) > 0){
            $referencias_ids = [];
            foreach($input['referenciax'] as $item)
            {
                $referencia = Referencia::firstOrCreate([
                    'referencia' => isset($item['referencia']) ? $item['referencia'] : $item,
                ]);
                $referencias_ids[] = $referencia->id;
            }

            if(count($referencias_ids) > 0){
                $coluna->referencias()->sync($referencias_ids);
            }
        }
        else{
            $coluna->referencias()->sync([]);
        }

        return response()->json("Registro atualizado com sucesso.", 200);
    }

    public function destroy($id)
    {
        $coluna = $this->colunaRepository->find($id);
        if (!$coluna) {
            return response()->json("Registro não encontrado.", 500);
        }
        if($coluna->referencias()->count() > 0){
            foreach( $coluna->referencias as $referencia){
                $referencia->delete();
            }
            $coluna->referencias()->detach();
        }
        $this->colunaRepository->delete($coluna);
        return $id;
    }
}
