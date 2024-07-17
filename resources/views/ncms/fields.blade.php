<!-- Codigo Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 2;">
                    <label class="label-float" for="codigo">Codigo:</label>
                <input type="text" name="codigo" id="codigo" class="form-control" value="{{ $ncm->codigo ?? '' }}">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
                    <label class="label-float" for="tipo">Tipo:</label>
                <select name="tipo" id="tipo" class="form-control">
            @foreach(\App\Helpers\TributacaoNcmHelper::$values as $key => $value)
                <option value="{{ $key }}">{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>

<div class="field-row">
</div>