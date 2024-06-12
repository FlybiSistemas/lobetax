<x-app-layout>
    <x-slot name="header">
        <p class="breadcrumb">
            <span>Lobe</span>
            <span>/</span>
            <span>Documentos</span>
        </p>
        <span class="title">
            Documentos
        </span>
    </x-slot>

    <div style="padding: 10px 20px 0 10px;display: flex;flex-direction: column;">
        <div class="btn-import" style="display: flex;justify-content: space-between;">
            <span></span>

            <div class="button blue">
                <span onclick="Tela.abrirJanela('{{ route('impNotas.import') }}', 'Importação de XML por API', 'md')">IMPORTAR</span>
            </div>
        </div>

        <div id="divList">
            
        </div>
        <script>
            $(function() {
                $('#formSearch').attr('action', '{{ route('impNotas.search') }}');
                $('#filter_search').attr('name', 'filter_nome');
                Filtro.inicializaFormBusca("#formSearch", "#divList", true);
            });
        </script>
    </div>

</x-app-layout>