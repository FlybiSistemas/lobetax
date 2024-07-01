<div style="overflow-x: unset;">
    <table class="table-list">
        <thead>
            <tr class="titulos" style="display: contents;">
                <th>Chave</th>
                <th>Imposto</th>
                <th>Chave Lei</th>
                <th>Descricao</th>
                <th>Tipo Campo</th>
                <th>Chave Campo</th>
                <th>Descricao Chave Campo</th>
                <th>Info</th>
                <th width="100">Ações</th>
            </tr>
        </thead>
        <tbody style="display: block;">
            @if($lbtaxfulls->count() > 0)
                @foreach($lbtaxfulls as $lbtaxfull)
                <tr id="row_{{ $lbtaxfull->id }}">
                    <td>{{ $lbtaxfull->chave }}</td>
                    <td>{{ \App\Helpers\ImpostoHelper::get($lbtaxfull->imposto) }}</td>
                    <td>{{ $lbtaxfull->chave_lei }}</td>
                    <td>{{ $lbtaxfull->descricao }}</td>
                    <td>{{ \App\Helpers\TipoCampoHelper::get($lbtaxfull->tipo_campo) }}</td>
                    <td>{{ $lbtaxfull->chave_campo }}</td>
                    <td>{{ $lbtaxfull->descricao_chave_campo }}</td>
                    <td>{{ $lbtaxfull->info }}</td>
                    <td class="actions">
                        <div onclick="Tela.abrirJanela('{{ route('lbtaxfulls.edit', $lbtaxfull->id) }}', 'Visualizar', 'md')">
                            <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                        </div>
                        <div onclick="Tela.abrirJanelaExcluir('{{ route('lbtaxfulls.destroy', [$lbtaxfull->id]) }}?_token={{ csrf_token() }}', '{{ $lbtaxfull->id }}')">
                            <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                        </div>
                        <div class="border-b"></div>
                    </td>
                </tr>
                @endforeach
            @else
            <tr>
                <td colspan="4">Nenhum registro encontrado.</td>
            </tr>
            @endif
        </tbody>
    </table>
</div>
<div class="card-footer clearfix">
    <div class="float-right">
        @include('layouts.pagination', [
            'paginator' => $lbtaxfulls,
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
            if (tdWidth < 100)
                tdWidth = 100;
            if ($(this).hasClass('ac'))
                tdWidth = 65;
            $(this).css('width', tdWidth);
        });
        $('tbody>tr>td').each(function() {
            let tdWidth = $(this).outerWidth();
            if (tdWidth < 100) {
                $(this).css('width', '100px');
            }
        });

        let telaWidth = $(window).width();
        let sidebarWidth = $('.sidebar').width();
        let contentWidth = telaWidth - sidebarWidth;
        $('.container').css('width', contentWidth - 20);
        $('tbody').css('display', 'contents');
    });
</script>