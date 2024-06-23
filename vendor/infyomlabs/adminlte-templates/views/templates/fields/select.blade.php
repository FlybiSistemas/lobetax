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
            @foreach($config->options->options as $option)
                <option value="{{ $option->value }}" @if($config->model->{$fieldName} == $option->value) selected @endif>{{ $option->label }}</option>
            @endforeach
        </select>
    </div>
</div>