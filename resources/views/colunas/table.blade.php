<table class="table-list">
    <thead>
        <tr class="titulos">
            <th>Nome</th>
            <th>Referência</th>
            <th>Ações
                <div class="border-b"></div>
            </th>
        </tr>
    </thead>
    <tbody>
        @foreach($colunas as $coluna)
            <tr>
                <td>{{ $coluna->nome }}</td>
                <td>{{ $coluna->referencia }}</td>
                <td>
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