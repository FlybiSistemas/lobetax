<x-app-layout>
    <x-slot name="header">
        <p class="breadcrumb">
            <span>Lobe</span>
            <span>/</span>
                            <span>Participantes</span>
                    </p>
                    <span class="title">Participantes</span>
            </x-slot>

    <div style="padding: 10px 20px 0 10px;display: flex;flex-direction: column;">
        <div class="btn-import" style="display: flex;justify-content: space-between;">
            <span></span>

            <div class="button blue">
                <span onclick="Tela.abrirJanela('{{ route('participantes.create') }}', 'Nova Participantes', 'md')">NOVO</span>
            </div>
        </div>

        <div id="divList">
            
        </div>
        <script>
            $(function() {
                                $('#formSearch').attr('action', '{{ route('participantes.search') }}');
                $('#filter_search').attr('name', 'filter_search');
                Filtro.inicializaFormBusca("#formSearch", "#divList", true);
            });

        </script>
    </div>

</x-app-layout>
