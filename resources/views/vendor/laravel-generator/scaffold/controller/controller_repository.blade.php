@php
    echo "<?php".PHP_EOL;
@endphp

namespace {{ $config->namespaces->controller }};

@if(config('laravel_generator.tables') === 'datatables')
use {{ $config->namespaces->dataTables }}\{{ $config->modelNames->name }}DataTable;
@endif
use {{ $config->namespaces->request }}\Create{{ $config->modelNames->name }}Request;
use {{ $config->namespaces->request }}\Update{{ $config->modelNames->name }}Request;
use {{ $config->namespaces->app }}\Http\Controllers\AppBaseController;
use {{ $config->namespaces->repository }}\{{ $config->modelNames->name }}Repository;
use Illuminate\Http\Request;
use Flash;

class {{ $config->modelNames->name }}Controller extends AppBaseController
{
    /** @var {{ $config->modelNames->name }}Repository ${{ $config->modelNames->camel }}Repository*/
    private ${{ $config->modelNames->camel }}Repository;

    public function __construct({{ $config->modelNames->name }}Repository ${{ $config->modelNames->camel }}Repo)
    {
        $this->{{ $config->modelNames->camel }}Repository = ${{ $config->modelNames->camel }}Repo;
    }

    /**
     * Display a listing of the {{ $config->modelNames->name }}.
     */
    {!! $indexMethod !!}

    /**
     * Show the form for creating a new {{ $config->modelNames->name }}.
     */
    public function create()
    {
        return view('{{ $config->prefixes->getViewPrefixForInclude() }}{{ $config->modelNames->snakePlural }}.create');
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        ${{ $config->modelNames->camelPlural }} = $this->{{ $config->modelNames->camel }}Repository->all($searchData);

        return view("{{ $config->modelNames->camelPlural }}.table", [
            "{{ $config->modelNames->camelPlural }}" => ${{ $config->modelNames->camelPlural }},
            "page" => $request->input("page", 0)
        ]);
    }

    /**
     * Store a newly created {{ $config->modelNames->name }} in storage.
     */
    public function store(Create{{ $config->modelNames->name }}Request $request)
    {
        $input = $request->all();

        /** @var {{ $config->modelNames->name }} ${{ $config->modelNames->camel }} */
        ${{ $config->modelNames->camel }} = $this->{{ $config->modelNames->camel }}Repository->create($input);

        if(${{ $config->modelNames->camel }}){
            return response()->json('Registro criado com sucesso', 200);
        }
        
        return response()->json('Erro ao criar registro', 500);
    }

    /**
     * Display the specified {{ $config->modelNames->name }}.
     */
    public function show($id)
    {
        /** @var {{ $config->modelNames->name }} ${{ $config->modelNames->camel }} */
        ${{ $config->modelNames->camel }} = $this->{{ $config->modelNames->camel }}Repository->find($id);

        if(!${{ $config->modelNames->camel }}){
            return response()->json('Registro não encontrado', 500);
        }

        return view('{{ $config->prefixes->getViewPrefixForInclude() }}{{ $config->modelNames->snakePlural }}.show')->with('{{ $config->modelNames->camel }}', ${{ $config->modelNames->camel }});
    }

    /**
     * Show the form for editing the specified {{ $config->modelNames->name }}.
     */
    public function edit($id)
    {
        /** @var {{ $config->modelNames->name }} ${{ $config->modelNames->camel }} */
        ${{ $config->modelNames->camel }} = $this->{{ $config->modelNames->camel }}Repository->find($id);

        if(!${{ $config->modelNames->camel }}){
            return response()->json('Registro não encontrado', 500);
        }

        return view('{{ $config->prefixes->getViewPrefixForInclude() }}{{ $config->modelNames->snakePlural }}.edit')->with('{{ $config->modelNames->camel }}', ${{ $config->modelNames->camel }});
    }

    /**
     * Update the specified {{ $config->modelNames->name }} in storage.
     */
    public function update($id, Update{{ $config->modelNames->name }}Request $request)
    {
        /** @var {{ $config->modelNames->name }} ${{ $config->modelNames->camel }} */
        ${{ $config->modelNames->camel }} = $this->{{ $config->modelNames->camel }}Repository->find($id);

        if(!${{ $config->modelNames->camel }}){
            return response()->json('Registro não encontrado', 500);
        }

        $this->{{ $config->modelNames->camel }}Repository->update(${{ $config->modelNames->camel }}, $request->all());
        return response()->json('Registro atualizado com sucesso', 200);
    }

    /**
     * Remove the specified {{ $config->modelNames->name }} from storage.
     *
     * @throws \Exception
     */
    public function destroy($id)
    {
        /** @var {{ $config->modelNames->name }} ${{ $config->modelNames->camel }} */
        ${{ $config->modelNames->camel }} = $this->{{ $config->modelNames->camel }}Repository->find($id);

        if(!${{ $config->modelNames->camel }}){
            return response()->json('Registro não encontrado', 500);
        }

        ${{ $config->modelNames->camel }}->delete();

        return response()->json('Registro deletado com sucesso', 200);
    }
}
