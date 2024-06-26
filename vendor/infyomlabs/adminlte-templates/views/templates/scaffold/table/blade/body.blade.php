@php
    $open = '{{';
    $close = '}}';
@endphp
<table class="table-list">
    <thead>
        <tr class="titulos">
            {!! $fieldHeaders !!}
            @if($config->options->localized)
                <th width="100">@lang('crud.action')</th>
            @else
                <th width="100">Ações</th>
            @endif
        </tr>
    </thead>
    <tbody>
        @@foreach(${{ $config->modelNames->camelPlural }} as ${{ $config->modelNames->camel }})
            <tr id="row_{{ $open }} ${{ $config->modelNames->camel }}->id {{ $close }}">
                {!! $fieldBody !!}
                <td class="actions">
                    <div onclick="Tela.abrirJanela('{{ $open }} route('{{ $config->modelNames->camelPlural }}.edit', ${{ $config->modelNames->camel }}->id) {{ $close }}', 'Visualizar', 'md')">
                        <img class="acoes-img" src="{{ $open }} asset('img/new/icons/eye.ico') }}">
                    </div>
                    <div onclick="Tela.abrirJanelaExcluir('{{ $open }} route('{{ $config->modelNames->camelPlural }}.destroy', [${{ $config->modelNames->camel }}->id]) {{ $close }}?_token=@{{ csrf_token() }}', '{{ $open }} ${{ $config->modelNames->camel }}->id {{ $close }}')">
                        <img class="acoes-img" src="{{ $open }} asset('img/new/icons/trash.ico') }}">
                    </div>
                    <div class="border-b"></div>
                </td>
            </tr>
        @@endforeach
    </tbody>
</table>
