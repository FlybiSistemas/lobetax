<table class="table-list">
    <thead>
        <tr class="titulos">
            <th>Uf</th>
                <th>Imposto</th>
                <th>Ordem</th>
                <th>Legislacao</th>
                            <th width="100">Ações</th>
                    </tr>
    </thead>
    <tbody>
        @foreach($lbtaxufs as $lbtaxuf)
            <tr>
                <td>{{ $lbtaxuf->uf }}</td>
                    <td>{{ $lbtaxuf->imposto }}</td>
                    <td>{{ $lbtaxuf->ordem }}</td>
                    <td>{{ $lbtaxuf->legislacao }}</td>
                <td class="flex">
                    <div class="">
                        <img class="acoes-img" src="http://lobetax.local/img/new/icons/eye.ico">
                    </div>
                    <div class="">
                        <img class="acoes-img" src="http://lobetax.local/img/new/icons/trash.ico">
                    </div>
                    <div class="border-b"></div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
