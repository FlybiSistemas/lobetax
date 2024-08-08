<table class="table-list">
    <thead>
        <tr class="titulos" style="display: contents;">
            <th>Tabela</th>
            <th>Valor</th>
            <th>Descricao</th>
            <th width="100">Ações</th>
        </tr>
    </thead>
    <tbody style="display: block;">
        @foreach($alertas as $alerta)
            <tr id="row_{{ $alerta->id }}">
                <td>{{ $alerta->model_name }}</td>
                <td>{{ $alerta->valor }}</td>
                <td>{{ $alerta->descricao }}</td>
                <td class="actions">
                    <div onclick="Tela.abrirJanela('{{ $alerta->rota }}', 'Resolver', 'lg')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
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