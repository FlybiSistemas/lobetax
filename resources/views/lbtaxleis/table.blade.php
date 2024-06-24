<table class="table-list">
    <thead>
        <tr class="titulos">
            <th>Imposto</th>
                <th>Cod</th>
                <th>Bsl</th>
                <th>Chave</th>
                            <th width="100">Ações</th>
                    </tr>
    </thead>
    <tbody>
        @foreach($lbtaxleis as $lbtaxlei)
            <tr id="row_{{ $lbtaxlei->id }}">
                <td>{{ $lbtaxlei->imposto }}</td>
                    <td>{{ $lbtaxlei->cod }}</td>
                    <td>{{ $lbtaxlei->bsl }}</td>
                    <td>{{ $lbtaxlei->chave }}</td>
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
