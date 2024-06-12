<div class="sidebar">
    <div class="logo">
        <div style="padding: 0 40px;">
            <img width="100%" src="{{ asset('img/logo2.png') }}" />
        </div>
    </div>
    <div class="hr">
    </div>
    <div class="menu">
        <x-nav-link route="dashboard" icon="home">
            Início
        </x-nav-link>

        <x-nav-link route="impNotas" icon="nf">
            NF-s
        </x-nav-link>


        <a class="item {{ Request::is('impNotas*') ? 'active' : '' }}" href="{{ route('impNotas') }}">
            <div class="icon">
                <img class="file-text" src="{{ asset('img/vectors/nf.svg') }}" />
            </div>
            <div class="item-text">
                IA
            </div>
        </a>

        {{--
            <div class="item">
                <div class="icon">
                    <img class="file-text" src="{{ asset('img/vectors/file_text.svg') }}" />
                </div>
                <div class="item-text">
                    Documentos
                </div>
            </div>
            <div class="item">
                <div class="icon">
                    <img class="file-text" src="{{ asset('img/vectors/dollar.svg') }}" />
                </div>
                <div class="item-text">
                    Financeiro
                </div>
            </div>
            <div class="item">
                <div class="icon">
                    <img class="file-text" src="{{ asset('img/vectors/user.svg') }}" />
                </div>
                <div class="item-text">
                    Folha de Pagamento
                </div>
            </div>
        --}}

    </div>
</div>