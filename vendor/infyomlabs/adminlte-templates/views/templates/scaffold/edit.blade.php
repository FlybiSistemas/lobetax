<@x-form route="{{ $config->prefixes->getRoutePrefixWith('.') }}{{ $config->modelNames->camelPlural }}.update" params="${{ $config->modelNames->camel }}->id">
    @@method('PATCH')
    @@include('{{ $config->prefixes->getViewPrefixForInclude() }}{{ $config->modelNames->snakePlural }}.fields')
<@/x-form>