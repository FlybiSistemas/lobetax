<!-- Codigo Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
                    <label class="label-float" for="codigo">Codigo:</label>
                <input type="text" name="codigo" id="codigo" class="form-control" value="{{ $cnae->codigo ?? '' }}">
    </div>
</div>

<!-- Descricao Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="descricao">Descricao:</label>
        <input type="text" name="descricao" id="descricao" class="form-control" value="{{ $cnae->descricao ?? '' }}">
    </div>
</div>

<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="categoria">Categoria:</label>
            <select name="categoria" id="categoria" class="form-control">
            @foreach(\App\Helpers\CategoriaHelper::$values as $key => $value)
                <option value="{{ $key }}" @if($cnae && $cnae->categoria == $key) selected @endif>{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>
