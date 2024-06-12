<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('css/iziToast.min.css') }}">

    <!-- Scripts -->
    @vite(['resources/css/theme-lobetax.css'])
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <script src="{{ asset('js/jquery.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/iziToast.min.js') }}"></script>
</head>

<body>
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 documentos">
        @include('layouts.sidebar')

        <div class="container">
            <!-- Page Heading -->
            @if (isset($header))
                <div class="head">
                    <div>
                        {{ $header }}
                    </div>
                    <div class="flex" style="align-items: center;">
                        <form action="" id="formSearch" class="formSearch" method="post">
                            <div class="search-input input">
                                @csrf
                                <img class="search-icon" src="{{ asset('img/new/icons/search.ico') }}" />
                                    <input type="text" class="form-control" id="filter_search" placeholder="Pesquisar">
                                <input type="hidden" name="filter_take" id="filter_take" value="10">
                            </div>

                            <style>
                                .form-control{
                                    height: 50px;
                                    width: 100%;
                                    border: solid 1px #00000014;
                                    border-radius: 25px;
                                    padding-left: 3px;
                                }
                                .search-input {
                                    position: relative;
                                }

                                .search-icon {
                                    position: absolute;
                                    left: 13px; /* Ajuste a posição conforme necessário */
                                    top: 50%;
                                    width: 25px;
                                    transform: translateY(-50%);
                                }

                                .form-control:focus-visible {
                                    outline: none;
                                    border: solid 1px #00000014 !important;
                                }

                                .form-control:focus {
                                    outline: none;
                                    border: solid 1px #00000014;
                                }

                                .form-control {
                                    padding-left: 45px !important;
                                }
                            </style>
                        </form>
                        <div class="user">
                            <div class="photo">
                                <img class="user-1" src="{{ asset('img/vectors/user_18.svg') }}" />
                            </div>
                            <div class="name">
                                Rafael Gomes
                            </div>
                        </div>
                        <div class="buttons">
                            <div class="btn-icon">
                                <img class="header-icon" src="{{ asset('img/vectors/settings.svg') }}" />
                            </div>
                            <div class="btn-icon">
                                <img class="header-icon" src="{{ asset('img/vectors/bell.svg') }}" />
                            </div>
                        </div>
                    </div>
                </div>
        
                <style>
                    .table-list {
                        width: 100%;
                        table-layout: fixed;
                        box-shadow: var(--shadow, 0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.09));
                        border-radius: 16px;
                        background: var(--white-100, #FFFFFF);
                        padding: 8px 16px 28px 16px;
                        width: 100%;
                        box-sizing: border-box;
                    }
        
                    .table-list th,
                    .table-list td {
                        padding: 8px;
                        word-wrap: break-word;
                    }
        
                    thead th {
                        text-align: start;
                        font-family: 'Inter';
                        font-weight: 700;
                        font-size: 10px;
                        line-height: 1.5;
                        text-transform: uppercase;
                        color: var(--text-tertiary, #B3B4B6);
                    }
        
                    tr {
                        position: relative;
                    }
        
                    tbody tr td {
                        color: var(--text-secondary, #7E8185);
                    }
        
                    tbody tr td:first-child {
                        color: var(--text-primary, #2D3748);
                    }
        
                    td span {
                        text-align: center;
                    }
        
                    .border-b {
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        border-bottom: 1px solid var(--white-80, #E2E8F0);
                        position: absolute;
                    }
                </style>
            @endif
    
            <!-- Page Content -->
            <main>
                {{ $slot }}
            </main>
        </div>
    </div>
</body>

<div class="modal fade show" id="modalBasic" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
    aria-modal="true" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Título</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

            </div>
        </div>
    </div>
</div>

<div class="modal fade show" id="modalSub" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="true"
    aria-modal="true" role="dialog">
    <div class="modal-dialog" role="document"
        style="box-shadow: 0 5px 15px rgba(0,0,0,.5); top: 10px; left: 10px;">
        <div class="modal-content">
            <div class="modal-header modal-header-sub">
                <h5 class="modal-title">Título</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

            </div>
        </div>
    </div>
</div>

<div class="modal fade show" id="modalDelete" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
    aria-modal="true" role="dialog" style="display: none;">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title" id="headerModal">Exclusão de registro</h4>

                <div class="loader-modal spinner" style="display:none">Loading...</div>
                <button type="button" class="close" data-bs-dismiss="modal" aria-hidden="true">×</button>
            </div>

            <div class="modal-body" id="bodyModalDelete">
                Tem certeza que deseja excluir este registro?
                <input type="hidden" id="modalDelete_urlExcluir">
                <input type="hidden" id="modalDelete_callback">
                <input type="hidden" id="modalDelete_id">
            </div>

            <div class="modal-footer" id="modalDelete_footerDeletar"></div>
        </div>
    </div>
</div>

</html>

<style>
    body {
        background: #F8F9FA;
    }

    .documentos .logo {
        margin-bottom: 32px;
        width: 100%;
    }

    .documentos .hr {
        background: linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.5%, rgba(224, 225, 226, 0.156) 99%);
        margin-bottom: 25px;
        width: 220px;
        height: 1px;
    }

    .documentos .home {
        position: absolute;
        right: 6.5px;
        bottom: 6.5px;
        width: 16px;
        height: 16px;
    }

    .item.active .item-text {
        color: var(--text-primary, #2D3748);
    }

    .item .item-text {
        margin: 4.5px 0;
        display: inline-block;
        overflow-wrap: break-word;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 14px;
        line-height: 1.5;
        color: var(--text-secondary, #7E8185);
    }

    .documentos .file-text {
        position: absolute;
        right: 6.5px;
        bottom: 6.5px;
        width: 16px;
        height: 16px;
    }

    .documentos .icon {
        background: var(--white-100, #FFFFFF);
        border-radius: 10px;
        position: relative;
        margin-right: 8px;
        width: 30px;
        height: 30px;
    }

    .documentos .item.active .file-text {
        filter: brightness(100);
    }

    .documentos .item.active .icon {
        background: var(--blue-primary-0, #1E8DEB) !important;
    }

    .documentos .item.active {
        box-shadow: var(--shadow, 0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.09));
        background: var(--white-100, #FFFFFF);
    }

    .documentos .item {
        border-radius: 16px;
        margin-bottom: 12px;
        display: flex;
        padding: 12px 0 12px 16px;
    }

    .documentos .menu {
        display: flex;
        flex-direction: column;
        width: 90%;
        box-sizing: border-box;
    }

    .documentos .sidebar {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: start;
        box-sizing: border-box;
    }

    .documentos .breadcrumb {
        margin-bottom: 4px;
        background-color: #f3f4f6;
        align-self: flex-start;
        overflow-wrap: break-word;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 12px;
        line-height: 1.5;
        color: var(--blue-primary-0, #1E8DEB);
    }

    .documentos .breadcrumb span:first-child {
        color: var(--text-tertiary, #B3B4B6);
    }

    .documentos .title {
        overflow-wrap: break-word;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 24px;
        line-height: 1.5;
        color: var(--blue-primary-0, #1E8DEB);
    }

    .documentos .vector {
        width: 13px;
        height: 13px;
    }

    .documentos .icon-search {
        margin: 5.5px 9.5px 5.5px 0;
        display: flex;
        width: 13px;
        height: 13px;
        box-sizing: border-box;
    }

    /* Alterar */
    .documentos .placeholder {
        overflow-wrap: break-word;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        color: var(--text-tertiary, #B3B4B6);
    }

    .documentos .value {
        display: flex;
        box-sizing: border-box;
    }

    .documentos .input-1 {
        border-radius: 16px;
        border: 1px solid var(--white-80, #E2E8F0);
        background: var(--white-100, #FFFFFF);
        display: flex;
        flex-direction: row;
        padding: 11px 0 11px 16.5px;
        width: 350px;
        box-sizing: border-box;
    }

    .documentos .input {
        margin-right: 16px;
        display: flex;
        width: 350px;
        box-sizing: border-box;
    }

    /*  */
    .documentos .user-1 {
        border-radius: 30px;
        width: 21px;
        height: 21px;
    }

    .documentos .photo {
        border-radius: 40px;
        border: 1px solid var(--text-secondary, #7E8185);
        margin-right: 8px;
        display: flex;
        padding: 8.5px;
        width: 40px;
        height: 40px;
        box-sizing: border-box;
    }

    .documentos .name {
        margin: 11px 0;
        display: inline-block;
        overflow-wrap: break-word;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 12px;
        line-height: 1.5;
        color: var(--text-secondary, #7E8185);
    }

    .documentos .user {
        margin: 4px 16.2px 4px 0;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
    }

    .documentos .btn-icon {
        border-radius: 8px;
        border: 1px solid var(--white-80, #E2E8F0);
        margin-right: 8px;
        display: flex;
        padding: 7px;
        width: 40px;
        height: 40px;
        box-sizing: border-box;
    }

    .documentos .header-icon {
        width: 24px;
        height: 24px;
    }

    .documentos .buttons {
        margin: 4px 0;
        display: flex;
        flex-direction: row;
        width: 88px;
        height: fit-content;
        box-sizing: border-box;
    }

    .documentos .flex {
        display: flex;
    }

    .documentos .head {
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
        width: 83vw;
    }

    .titles span {
        margin-right: 7.5px;

        overflow-wrap: break-word;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 10px;
        line-height: 1.5;
        text-transform: uppercase;
        color: var(--text-tertiary, #B3B4B6);
    }

    .documentos .validade {
        overflow-wrap: break-word;
        font-family: 'Inter';
        font-weight: 700;
        font-size: 10px;
        line-height: 1.5;
        text-transform: uppercase;
        color: var(--text-tertiary, #B3B4B6);
    }

    .documentos .titles,
    .row {
        border-bottom: 1px solid var(--white-80, #E2E8F0);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 0 9px 0;
        width: 100%;
        box-sizing: border-box;
    }

    .documentos .description {
        margin: 4px 10px 4px 0;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
        color: var(--text-primary, #2D3748);
    }

    .documentos .container {
        overflow-wrap: break-word;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 13px;
        line-height: 1.4;
        padding-right: 0px;
        padding-left: 0px;

    }

    .documentos .validade-1 {
        border-radius: 16px;
        background: var(--red-1, #FFEDED);
        padding: 4px 17.7px 4px 16px;
        box-sizing: border-box;
    }

    .documentos .acoes-img {
        width: 16px;
        height: 16px;
    }

    .documentos .validade-2 {
        border-radius: 16px;
        background: var(--yellow-1, #FFFBDF);
        padding: 4px 16.8px 4px 16px;
        box-sizing: border-box;
    }

    .documentos .validade-3 {
        border-radius: 16px;
        background: var(--green-1, #EEFFE1);
        padding: 4px 18px 4px 16px;
        box-sizing: border-box;
    }

    .documentos .validade-4 {
        border-radius: 16px;
        background: var(--green-1, #EEFFE1);
        padding: 4px 16px;
        box-sizing: border-box;
    }

    .documentos .indeterminado-1 {
        overflow-wrap: break-word;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 14px;
        line-height: 1.4;
        color: var(--blue-primary-0, #1E8DEB);
    }

    .documentos .validade-6 {
        border-radius: 16px;
        background: var(--blue-primary-1, #E4F2FF);
        padding: 4px 16.3px 4px 16px;
        box-sizing: border-box;
    }

    .documentos .div-list {
        box-shadow: var(--shadow, 0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.09));
        border-radius: 16px;
        background: var(--white-100, #FFFFFF);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px 16px 28px 16px;
        width: 100%;
        box-sizing: border-box;
    }

    .documentos .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .documentos {
        display: flex;
        flex-direction: row;
        padding: 24px 16px 0 24px;

        box-sizing: border-box;
    }
</style>

<script>
  // Obtém todos os elementos com a classe "item"
  var items = document.querySelectorAll('.item');

  // Itera sobre cada elemento
  items.forEach(function (item) {
    // Adiciona um ouvinte de evento de clique a cada elemento
    item.addEventListener('click', function () {
      // Remove a classe "active" de todos os elementos
      items.forEach(function (item) {
        item.classList.remove('active');
      });
      // Adiciona a classe "active" apenas ao elemento clicado
      this.classList.add('active');
    });
  });
</script>