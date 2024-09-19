<div class="field-row">
    <!-- Iafis Field -->
    <div class="search-input input input-float" style="flex: 1; --w-input: 98%;">
        <label class="label-float" for="iafis">Iafis:</label>
        <input type="text" name="iafis" id="iafis" class="form-control" value="{{ $lbtax->iafis ?? '' }}">
    </div>
</div>
<div class="field-row">
    <!-- Aplica Field -->
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="aplica">Aplica:</label>
        <select name="aplica" id="aplica" class="form-control">
            <option value="1">S</option>
            <option value="0">N</option>
        </select>
    </div>
    <div class="search-input input input-float" style="flex: 2;">
        <label class="label-float" for="icms">Icms:</label>
        <select name="icms" id="icms" class="form-control">
            @foreach(\App\Helpers\TipoTributacaoHelper::$tipos as $key => $value)
            <option value="{{ $key }}">{{ $value }}</option>
            @endforeach
        </select>
    </div>
    <div class="search-input input input-float" style="flex: 2;">
        <label class="label-float" for="icmsst">Icmsst:</label>
        <select name="icmsst" id="icmsst" class="form-control">
            @foreach(\App\Helpers\ConfiguracaoHelper::$values as $key => $value)
            <option value="{{ $key }}">{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>

<input type="hidden" name="chave" id="chave" value="{{ $lbtaxlei->chave ?? '' }}">

<div style="padding-top: 1rem;margin-bottom: 1rem;border-bottom: 1px solid #e9ecef;">
    Validações
</div>
