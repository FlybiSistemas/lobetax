<table class="table-list">
    <thead>
        <tr class="titulos">
            @if(count($table) > 0)
                @foreach(array_keys($table[0]) as $key)
                    <th>{{ $key }}</th>
                @endforeach
            @endif
            <th width="100">Ações
                <div class="border-b"></div>
            </th>
        </tr>
    </thead>
    <tbody>
        @if(count($table) > 0)
            @foreach($table as $list)
                <tr>
                    @foreach($list as $key => $value)
                        <td>{{ $value }}</td>
                    @endforeach
                        <td class="flex">
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
<div class="card-footer clearfix">
    <div class="float-right">
        @include('layouts.pagination', [
            'paginator' => $impNotas,
            'filtro' => '&' . http_build_query(request()->except('page')),
        ])
    </div>
</div>