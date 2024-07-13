<table class="table-list">
    <thead>
        <tr class="titulos" style="display: contents;">
            <th>Cnpj</th>
                <th>Razao Social</th>
                <th>Natureza</th>
                <th>Categoria</th>
                <th width="100">Ações</th>
            </tr>
    </thead>
    <tbody style="display: block;">
        @foreach($participantes as $participante)
            <tr id="row_{{ $participante->id }}">
                <td>{{ App\Helpers\FormatterHelper::formatCnpjCpf($participante->cnpj) }}</td>
                    <td>{{ $participante->razao_social }}</td>
                    <td>{{ $participante->natureza }}</td>
                    <td>{{ \App\Helpers\CategoriaHelper::get($participante->categoria) }}</td>
                <td class="actions">
                    <div onclick="Tela.abrirJanela('{{ route('participantes.edit', $participante->id) }}', 'Visualizar', 'md')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                    </div>
                    <div onclick="Tela.abrirJanelaExcluir('{{ route('participantes.destroy', [$participante->id]) }}?_token={{ csrf_token() }}', '{{ $participante->id }}')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                    </div>
                    <div class="border-b"></div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
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