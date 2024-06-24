<x-app-layout>
    <x-slot name="header">
        <p class="breadcrumb">
            <span>Lobe</span>
            <span>/</span>
                            <span>Lbtaxleis</span>
                    </p>
                    <span class="title">Lbtaxleis</span>
            </x-slot>

    <div style="padding: 10px 20px 0 10px;display: flex;flex-direction: column;">
        <div class="btn-import" style="display: flex;justify-content: space-between;">
            <span></span>

            <div class="button blue">
                <span onclick="Tela.abrirJanela('{{ route('lbtaxleis.create') }}', 'Nova Lei', 'md')">NOVA LEI</span>
            </div>
        </div>

        <div id="divList">
            
        </div>
        <script>
            $(function() {
                $('#formSearch').attr('action', '{{ route('lbtaxleis.search') }}');
                $('#filter_search').attr('name', 'filter_nome');
                Filtro.inicializaFormBusca("#formSearch", "#divList", true);
            });

        </script>
    </div>

</x-app-layout>
