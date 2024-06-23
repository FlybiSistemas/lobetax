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
            <tr id="row_{{ $lbtaxuf->id }}">
                <td>{{ $lbtaxuf->uf }}</td>
                    <td>{{ $lbtaxuf->imposto }}</td>
                    <td>{{ $lbtaxuf->ordem }}</td>
                    <td>{{ $lbtaxuf->legislacao }}</td>
                <td class="actions">
                    <div onclick="Tela.abrirJanela('{{ route('lbtaxufs.edit', $lbtaxuf->id) }}', 'Visualizar', 'md')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                    </div>
                    <div onclick="Tela.abrirJanelaExcluir('{{ route('lbtaxufs.destroy', [$lbtaxuf->id]) }}?_token={{ csrf_token() }}', '{{ $lbtaxuf->id }}')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                    </div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
