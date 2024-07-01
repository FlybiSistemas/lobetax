<x-app-layout>
    <x-slot name="header">
        <p class="breadcrumb">
            <span>Lobe</span>
            <span>/</span>
            <span>Lbtaxfull</span>
        </p>
        <span class="title">Lbtaxfull</span>
    </x-slot>

    <div style="padding: 10px 20px 0 10px;display: flex;flex-direction: column;">
        <div class="btn-import" style="display: flex;justify-content: space-between;">
            <span></span>

            <div class="button blue">
                <span onclick="Tela.abrirJanela('{{ route('lbtaxfulls.create') }}', 'Nova Lbtaxfull', 'md')">NOVO</span>
            </div>
        </div>

        <div id="divList">

        </div>
        <script>
            $(function() {
                $('#formSearch').attr('action', '{{ route('lbtaxfulls.search')}}');
                $('#filter_search').attr('name', 'filter_nome');
                Filtro.inicializaFormBusca("#formSearch", "#divList", true);
            });
        </script>
    </div>

</x-app-layout>