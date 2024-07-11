<x-app-layout>
    <x-slot name="header">
        <p class="breadcrumb">
            <span>Lobe</span>
            <span>&nbsp;/&nbsp;</span>
            <span>NFs</span>
        </p>
        <span class="title">
            NFs
        </span>
    </x-slot>

    <div style="padding: 10px 20px 0 10px;display: flex;flex-direction: column;">
        <div class="btn-import" style="display: flex;justify-content: space-between;">

            <select id="tabela" class="form-control" style="width: 180px;">
                <option value="">Padrão</option>
                @foreach($tabelas as $tabela)
                    <option value="{{ $tabela->id }}">{{ $tabela->nome }}</option>
                @endforeach
            </select>

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
                $('#tabela').on('change', function(){
                    $('[name="tabela"]').val(this.value);
                    $('#formSearch').submit();
                })
            });
        </script>
    </div>

</x-app-layout>