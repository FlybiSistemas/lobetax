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

        <x-nav-link route="impNotas.index" icon="nf">
            NF-s
        </x-nav-link>


        <x-nav-multi-link route="tabela" icon="nf" text="Rotinas">
            <x-nav-link route="tabelas.index" icon="nf" class="sub-item">
                Tabelas
            </x-nav-link>

            <x-nav-link route="colunas.index" icon="nf" class="sub-item">
                Colunas
            </x-nav-link>
        </x-nav-multi-link>


        <x-nav-multi-link route="tabela" icon="nf" text="Parametros">
            <x-nav-link route="lbtaxufs.index" icon="nf" class="sub-item">
                LBTAXUF
            </x-nav-link>

            <x-nav-link route="lbtaxleis.index" icon="nf" class="sub-item">
                LBTAXLEIS
            </x-nav-link>
        </x-nav-multi-link>

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