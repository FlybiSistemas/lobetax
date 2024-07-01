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
                                    <input type="text" class="form-control with-icon" id="filter_search" placeholder="Pesquisar">
                                <input type="hidden" name="filter_take" id="filter_take" value="10">
                            </div>
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
                    main{
                        width: 100%;
                    }
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
                        white-space: nowrap;
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

<script>
  var items = document.querySelectorAll('.item');

  items.forEach(function (item) {
  item.addEventListener('click', function () {
    if (!this.classList.contains('active')) {
      items.forEach(function (item) {
        item.classList.remove('active');
        var img = item.querySelector('img');
        while (img.classList.length > 0) {
          img.classList.remove(img.classList[0]);
        }
        img.classList.add('file-text');
      });

      this.classList.add('active');

      // Verifica se o item clicado possui um pai ul
      let pai = $(this).parent();
      if (pai.find('ul').length > 0) {
        pai.find('ul').slideToggle();
      }
    } else {
      let pai = $(this).parent();
      if (pai.find('ul').length > 0) {
        pai.find('ul').slideToggle();
      }
    }
  });
});

</script>