@php
    $open = '{{';
    $close = '}}';
@endphp
<@x-app-layout>
    <@x-slot name="header">
        <p class="breadcrumb">
            <span>Lobe</span>
            <span>/</span>
            @if($config->options->localized)
                <span>@@lang('models/{{ $config->modelNames->camelPlural }}.plural')</span>
            @else
                <span>{{ $config->modelNames->humanPlural }}</span>
            @endif
        </p>
        @if($config->options->localized)
            <span class="title">@@lang('models/{{ $config->modelNames->camelPlural }}.plural')</span>
        @else
            <span class="title">{{ $config->modelNames->humanPlural }}</span>
        @endif
    <@/x-slot>

    <div style="padding: 10px 20px 0 10px;display: flex;flex-direction: column;">
        <div class="btn-import" style="display: flex;justify-content: space-between;">
            <span></span>

            <div class="button blue">
                <span onclick="Tela.abrirJanela('@{{ route('{!! $config->prefixes->getRoutePrefixWith('.') !!}{!! $config->modelNames->camelPlural !!}.create') }}', 'Nova {{ $config->modelNames->human }}', 'md')">NOVO</span>
            </div>
        </div>

        <div id="divList">
            
        </div>
        <script>
            $(function() {
                @php
                    $routePrefix = $config->prefixes->getRoutePrefixWith('.');
                    $camelPlural = $config->modelNames->camelPlural;
                    $routeName = $routePrefix . $camelPlural . '.search';
                @endphp
                $('#formSearch').attr('action', '{{ $open }} route('{{ $routeName}}') }}');
                $('#filter_search').attr('name', 'filter_search');
                Filtro.inicializaFormBusca("#formSearch", "#divList", true);
            });

        </script>
    </div>

<@/x-app-layout>
