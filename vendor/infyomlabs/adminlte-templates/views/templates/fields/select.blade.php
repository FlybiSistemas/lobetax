<!-- {{ $fieldTitle }} Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        @if($config->options->localized)
            <label class="label-float" for="{{ $fieldName }}">__('models/{{ $config->modelNames->camelPlural }}.fields.{{ $fieldName }}'):</label>
        @else
            <label class="label-float" for="{{ $fieldName }}">{{ $fieldTitle }}:</label>
        @endif
        <!-- <input type="text" name="{{ $fieldName }}" id="{{ $fieldName }}" class="form-control" value="@{{ ${{ $config->modelNames->camel }}->{{ $fieldName }} ?? '' }}"> -->
        <select name="{{ $fieldName }}" id="{{ $fieldName }}" class="form-control">
            @@if(${{ $config->modelNames->camel }}->{{ $fieldName }} == 0)
                <option value="0" selected="selected">N</option>
                <option value="1" >S</option>
            @@else
                <option value="0" >N</option>
                <option value="1" selected="selected">S</option>
            @@endif
        </select>
    </div>
</div>