<!-- Iafis Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="iafis">Iafis:</label>
        <input type="text" name="iafis" id="iafis" class="form-control" value="{{ $lbtax->iafis ?? '' }}">
    </div>
</div>

<!-- Aplica Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="aplica">Aplica:</label>
        <select name="aplica" id="aplica" class="form-control">
            <option value="1">S</option>
            <option value="0">N</option>
        </select>
    </div>
</div>

<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="icms">Icms:</label>
        <select name="icms" id="icms" class="form-control">
            @foreach(\App\Helpers\TipoTributacaoHelper::$tipos as $key => $value)
            <option value="{{ $key }}">{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>

<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="icmsst">Icmsst:</label>
        <select name="icmsst" id="icmsst" class="form-control">
            @foreach(\App\Helpers\ConfiguracaoHelper::$values as $key => $value)
            <option value="{{ $key }}">{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>