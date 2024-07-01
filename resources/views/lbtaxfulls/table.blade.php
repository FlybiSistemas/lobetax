<table class="table-list">
    <thead>
        <tr class="titulos">
            <th>Chave</th>
                <th>Imposto</th>
                <th>Chave Lei</th>
                <th>Descricao</th>
                <th>Tipo Campo</th>
                <th>Chave Campo</th>
                <th>Descricao Chave Campo</th>
                <th>Info</th>
                            <th width="100">Ações</th>
                    </tr>
    </thead>
    <tbody>
        @foreach($lbtaxfulls as $lbtaxfull)
            <tr id="row_{{ $lbtaxfull->id }}">
                <td>{{ $lbtaxfull->chave }}</td>
                    <td>{{ $lbtaxfull->imposto }}</td>
                    <td>{{ $lbtaxfull->chave_lei }}</td>
                    <td>{{ $lbtaxfull->descricao }}</td>
                    <td>{{ $lbtaxfull->tipo_campo }}</td>
                    <td>{{ $lbtaxfull->chave_campo }}</td>
                    <td>{{ $lbtaxfull->descricao_chave_campo }}</td>
                    <td>{{ $lbtaxfull->info }}</td>
                <td class="actions">
                    <div onclick="Tela.abrirJanela('{{ route('lbtaxfulls.edit', $lbtaxfull->id) }}', 'Visualizar', 'md')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                    </div>
                    <div onclick="Tela.abrirJanelaExcluir('{{ route('lbtaxfulls.destroy', [$lbtaxfull->id]) }}?_token={{ csrf_token() }}', '{{ $lbtaxfull->id }}')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                    </div>
                    <div class="border-b"></div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
