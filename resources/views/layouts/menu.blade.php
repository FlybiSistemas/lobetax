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


<x-nav-multi-link route="parametro" icon="nf" text="Parametros">
    <x-nav-link route="lbtaxufs.index" icon="nf" class="sub-item">
        LBTAXUF
    </x-nav-link>

    <x-nav-link route="lbtaxleis.index" icon="nf" class="sub-item">
        LBTAXLEIS
    </x-nav-link>

    <x-nav-link route="lbtaxs.index" icon="nf" class="sub-item">
        LBTAX
    </x-nav-link>

    <x-nav-link route="lbtaxfulls.index" icon="nf" class="sub-item">
        LBTAXFULL
    </x-nav-link>
</x-nav-multi-link>


<x-nav-multi-link route="cadastro" icon="nf" text="Cadastros">
    <x-nav-link route="participantes.index" icon="nf" class="sub-item">
        Participantes
    </x-nav-link>

    <x-nav-link route="ncms.index" icon="nf" class="sub-item">
        NCMs
    </x-nav-link>
</x-nav-multi-link>
