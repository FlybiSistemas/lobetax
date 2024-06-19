<table class="table-list">
    <thead>
        <tr class="titulos">
            @foreach(array_keys($table[0]) as $key)
                <th>{{ $key }}</th>
            @endforeach
            <th>Ações
                <div class="border-b"></div>
            </th>
        </tr>
    </thead>
    <tbody>
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
    </tbody>
</table>