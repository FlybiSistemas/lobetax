<div style="overflow-x: unset;">
    <table class="table-list">
        <thead>
            <tr class="titulos" style="display: contents;">
                <th>Iafis</th>
                    <th>Aplica</th>
                    <th>Icms</th>
                    <th>Icmsst</th>
                    <th width="100">Ações</th>
                </tr>
        </thead>
        <tbody style="display: block;">
            @foreach($lbtaxs as $lbtax)
                <tr id="row_{{ $lbtax->id }}">
                    <td>{{ $lbtax->iafis }}</td>
                        <td>{{ $lbtax->aplica }}</td>
                        <td>{{ $lbtax->icms }}</td>
                        <td>{{ $lbtax->icmsst }}</td>
                    <td class="actions">
                        <div onclick="Tela.abrirJanela('{{ route('lbtaxs.edit', $lbtax->id) }}', 'Visualizar', 'md')">
                            <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                        </div>
                        <div onclick="Tela.abrirJanelaExcluir('{{ route('lbtaxs.destroy', [$lbtax->id]) }}?_token={{ csrf_token() }}', '{{ $lbtax->id }}')">
                            <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                        </div>
                        <div class="border-b"></div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
<div class="card-footer clearfix">
    <div class="float-right">
        @include('layouts.pagination', [
            'paginator' => $lbtaxs,
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
