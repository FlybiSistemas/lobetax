<table class="table-list">
    <thead>
        <tr class="titulos">
            <th>Nome</th>
            <th width="100">Ações</th>
        </tr>
    </thead>
    <tbody>
        @foreach($tabelas as $tabela)
            <tr>
                <td>{{ $tabela->nome }}</td>
                <td class="flex">
                    <div class="">
                        <img class="acoes-img" src="http://lobetax.local/img/vectors/eye.svg">
                    </div>
                    <div class="">
                        <img class="acoes-img" src="http://lobetax.local/img/vectors/download.svg">
                    </div>
                    <div class="border-b"></div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
