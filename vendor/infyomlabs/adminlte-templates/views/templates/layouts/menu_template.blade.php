<x-nav-link route="{!! $config->prefixes->getRoutePrefixWith('.') !!}{!! $config->modelNames->camelPlural !!}.index" icon="nf" class="sub-item">
    {{ $config->modelNames->humanPlural }}
</x-nav-link>
