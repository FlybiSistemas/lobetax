<x-app-layout>
    <x-slot name="header">
        <p class="breadcrumb">
            <span>Lobe</span>
            <span>/</span>
            <span>Documentos</span>
        </p>
        <span class="title">
            Documentos
        </span>
    </x-slot>

    <div style="padding: 10px 20px 0 10px;display: flex;flex-direction: column;">
        <div class="btn-import" style="display: flex;justify-content: space-between;">
            <span></span>

            <div class="button blue">
                <span onclick="Tela.abrirJanela('{{ route('impNotas.import') }}', 'Importação de XML por API', 'md')">IMPORTAR</span>
            </div>
        </div>

        <table class="table-list">
            <thead>
                <tr class="titulos">
                    <th>Documento</th>
                    <th>Detalhes</th>
                    <th>Órgão emissor</th>
                    <th>Tipo</th>
                    <th>Validade</th>
                    <th>Ações
                        <div class="border-b"></div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alvará de Vigilância Sanitária</td>
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
            </tbody>
        </table>
    </div>
</x-app-layout>