<table class="table-list">
    <thead>
        <tr class="titulos">
            <th>Nome</th>
            <th>Referência</th>
            <th width="100">Ações
                <div class="border-b"></div>
            </th>
        </tr>
    </thead>
    <tbody>
        @foreach($colunas as $coluna)
            <tr id="row_{{ $coluna->id }}">
                <td>{{ $coluna->nome }}</td>
                <td>{{ $coluna->referencia }}</td>
                <td class="actions">
                    <div onclick="Tela.abrirJanela('{{ route('colunas.edit', $coluna->id) }}', 'Visualizar', 'md')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                    </div>
                    <div onclick="Tela.abrirJanelaExcluir('{{ route('colunas.destroy', [$coluna->id]) }}?_token={{ csrf_token() }}', '{{ $coluna->id }}')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                    </div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>