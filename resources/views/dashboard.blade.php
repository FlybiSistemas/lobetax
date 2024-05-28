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

    <div style="padding: 10px 20px 0 10px;">
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
                            <img class="acoes-img" src="{{ asset('img/vectors/eye.svg') }}" />
                        </div>
                        <div class="">
                            <img class="acoes-img" src="{{ asset('img/vectors/download.svg') }}" />
                        </div>
                        <div class="border-b"></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</x-app-layout>