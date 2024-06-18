<table class="table-list">
    <thead>
        <tr class="titulos">
            {!! $fieldHeaders !!}
            @if($config->options->localized)
                <th colspan="3">@lang('crud.action')</th>
            @else
                <th colspan="3">Action</th>
            @endif
        </tr>
    </thead>
    <tbody>
        @@foreach(${{ $config->modelNames->camelPlural }} as ${{ $config->modelNames->camel }})
            <tr>
                {!! $fieldBody !!}
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
        @@endforeach
    </tbody>
</table>
