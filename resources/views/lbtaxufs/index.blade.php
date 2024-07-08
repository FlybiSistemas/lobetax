<x-app-layout>
    <x-slot name="header">
        <p class="breadcrumb">
            <span>Lobe</span>
            <span>/</span>
            <span>Lbtaxufs</span>
        </p>
        <span class="title">Lbtaxufs</span>
    </x-slot>

    <div style="padding: 10px 20px 0 10px;display: flex;flex-direction: column;">
        <div class="btn-import" style="display: flex;justify-content: space-between;">
            <span></span>

            <div class="button blue">
                <span onclick="Tela.abrirJanela('{{ route('lbtaxufs.create') }}', 'Nova Lbtaxuf', 'md')">NOVO</span>
            </div>
        </div>

        <div id="divList">
            
        </div>
        <script>
            $(function() {                
                $('#formSearch').attr('action', '{{ route('lbtaxufs.search')}}')
                $('#filter_search').attr('name', 'filter_search');
                Filtro.inicializaFormBusca("#formSearch", "#divList", true);
            });

        </script>
    </div>

</x-app-layout>
