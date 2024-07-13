<!-- Cnpj Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
                    <label class="label-float" for="cnpj">Cnpj:</label>
                <input type="text" name="cnpj" id="cnpj" class="form-control" value="{{ App\Helpers\FormatterHelper::formatCnpjCpf($participante->cnpj) ?? '' }}">
    </div>
</div>

<!-- Razao Social Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
                    <label class="label-float" for="razao_social">Razao Social:</label>
                <input type="text" name="razao_social" id="razao_social" class="form-control" value="{{ $participante->razao_social ?? '' }}">
    </div>
</div>

<!-- Natureza Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
                    <label class="label-float" for="natureza">Natureza:</label>
                <input type="text" name="natureza" id="natureza" class="form-control" value="{{ $participante->natureza ?? '' }}">
    </div>
</div>

<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
                    <label class="label-float" for="categoria">Categoria:</label>
                <select name="categoria" id="categoria" class="form-control">
            @foreach(\App\Helpers\CategoriaHelper::$values as $key => $value)
                <option value="{{ $key }}">{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>