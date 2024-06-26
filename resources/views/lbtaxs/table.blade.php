<table class="table-list">
    <thead>
        <tr class="titulos">
            <th>Iafis</th>
                <th>Aplica</th>
                <th>Icms</th>
                <th>Icmsst</th>
                            <th width="100">Ações</th>
                    </tr>
    </thead>
    <tbody>
        @foreach($lbtaxs as $lbtax)
            <tr id="row_{{ $lbtax->id }}">
                <td>{{ $lbtax->iafis }}</td>
                    <td>{{ $lbtax->aplica }}</td>
                    <td>{{ $lbtax->icms }}</td>
                    <td>{{ $lbtax->icmsst }}</td>
                <td class="actions">
                    <div onclick="Tela.abrirJanela('{{ route('lbtaxs.edit', $lbtax->id) }}', 'Visualizar', 'md')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                    </div>
                    <div onclick="Tela.abrirJanelaExcluir('{{ route('lbtaxs.destroy', [$lbtax->id]) }}?_token={{ csrf_token() }}', '{{ $lbtax->id }}')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                    </div>
                    <div class="border-b"></div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
