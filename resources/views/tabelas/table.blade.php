<table class="table-list">
    <thead>
        <tr class="titulos">
            <th>Nome</th>
            <th width="100">Ações</th>
        </tr>
    </thead>
    <tbody>
        @foreach($tabelas as $tabela)
            <tr id="row_{{ $tabela->id }}">
                <td>{{ $tabela->nome }}</td>
                <td class="actions">
                    <div onclick="Tela.abrirJanela('{{ route('tabelas.edit', $tabela->id) }}', 'Ver Tabela', 'md')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                    </div>
                    <div onclick="Tela.abrirJanelaExcluir('{{ route('tabelas.destroy', [$tabela->id]) }}?_token={{ csrf_token() }}', '{{ $tabela->id }}')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                    </div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
