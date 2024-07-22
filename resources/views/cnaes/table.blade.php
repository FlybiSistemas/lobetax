<table class="table-list">
    <thead>
        <tr class="titulos" style="display: contents;">
            <th>Codigo</th>
                <th>Descricao</th>
                <th>Atividade</th>
                            <th width="100">Ações</th>
                    </tr>
    </thead>
    <tbody style="display: block;">
        @foreach($cnaes as $cnae)
            <tr id="row_{{ $cnae->id }}">
                <td>{{ $cnae->codigo }}</td>
                    <td>{{ $cnae->descricao }}</td>
                    <td>{{ \App\Helpers\CategoriaHelper::get($cnae->categoria) }}</td>
                <td class="actions">
                    <div onclick="Tela.abrirJanela('{{ route('cnaes.edit', $cnae->id) }}', 'Visualizar', 'md')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                    </div>
                    <div onclick="Tela.abrirJanelaExcluir('{{ route('cnaes.destroy', [$cnae->id]) }}?_token={{ csrf_token() }}', '{{ $cnae->id }}')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                    </div>
                    <div class="border-b"></div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
<div class="card-footer clearfix">
    <div class="float-right">
        @include('layouts.pagination', [
            'paginator' => $cnaes,
            'filtro' => '&' . http_build_query(request()->except('page')),
        ])
    </div>
</div>
<script>
    $(document).ready(function() {
        let ths = $('.titulos>th');
        let tds = $('tbody>tr:first>td');
        
        ths.each(function(index) {
            let tdWidth = $(tds[index]).outerWidth();
            if(tdWidth < 100)
                tdWidth = 100;
            if ($(this).hasClass('ac'))
                tdWidth = 65;
            $(this).css('width', tdWidth);
        });
        $('tbody>tr>td').each(function() {
            let tdWidth = $(this).outerWidth();
            if(tdWidth < 100) {
                $(this).css('width', '100px');
            }
        });

        let telaWidth = $(window).width();
        let sidebarWidth = $('.sidebar').width();
        let contentWidth = telaWidth - sidebarWidth;
        $('.container').css('width', contentWidth-20);
        $('tbody').css('display', 'contents');
    });
</script>