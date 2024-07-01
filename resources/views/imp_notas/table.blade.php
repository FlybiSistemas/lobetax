<div style="overflow-x: scroll;">
    <table class="table-list">
        <thead>
            <tr class="titulos" style="display: contents;">
                @if(count($table) > 0)
                    @foreach(array_keys($table[0]) as $key)
                        <th>{{ $key }}</th>
                    @endforeach
                @endif
                <th class="ac">Ações
                    <div class="border-b"></div>
                </th>
            </tr>
        </thead>
        <tbody style="display: block;">
            @if(count($table) > 0)
                @foreach($table as $list)
                    <tr>
                        @foreach($list as $key => $value)
                            <td>{{ $value }}</td>
                        @endforeach
                            <td class="actions">
                                <div class="">
                                    <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                                </div>
                                <div class="">
                                    <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                                </div>
                                <div class="border-b"></div>
                            </td>
                        </tr>
                @endforeach
            @else
            <tr>
                <td colspan="4">Nenhum registro encontrado</td>
            </tr>
            @endif
        </tbody>
    </table>
</div>
<div class="card-footer clearfix">
    <div class="float-right">
        @include('layouts.pagination', [
            'paginator' => $impNotas,
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