<table class="table-list">
    <thead>
        <tr class="titulos">
            <th>Cod.</th>
            <th>Descrição</th>
            <th>NCM XML</th>
            <th>XML VALOR DIFAL</th>
            <th>TAX VALOR DIFAL</th>
            <th>Ações
                <div class="border-b"></div>
            </th>
        </tr>
    </thead>
    <tbody>
        @foreach($impNotas as $impNota)
            <tr>
                <td>{{ $impNota->id }}</td>
                <td>-</td>
                <td>SUVISA</td>
                <td>Licença / Alvará</td>
                <td>
                    <span class="validade-1">26/07/2023</span>
                </td>
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