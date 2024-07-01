<!-- Chave Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 3;">
        <label class="label-float" for="chave">Chave:</label>
        <input type="text" name="chave" id="chave" class="form-control" value="{{ $lbtaxfull->chave ?? '' }}">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="imposto">Imposto:</label>
        <select name="imposto" id="imposto" class="form-control">
            @foreach(\App\Helpers\ImpostoHelper::$impostos as $key => $value)
                <option value="{{ $key }}" @if(isset($lbtaxfull) && $lbtaxfull->imposto == $key) selected @endif>{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>


<!-- Chave Lei Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="chave_lei">Chave Lei:</label>
        <input type="text" name="chave_lei" id="chave_lei"
            class="form-control"
            value="{{ $lbtaxfull->chave_lei ?? '' }}"
            style="--w-input: 98%">
    </div>
</div>

<div class="field-row">
    <!-- Descricao Field -->
    <div class="search-input input input-float" style="flex: 3;">
        <label class="label-float" for="descricao">Descricao:</label>
        <input type="text" name="descricao" id="descricao" class="form-control" value="{{ $lbtaxfull->descricao ?? '' }}">
    </div>
    <!-- Tipo Campo Field -->
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="tipo_campo">Tipo Campo:</label>
        <select name="tipo_campo" id="tipo_campo" class="form-control">
            <option value="">-</option>
            @foreach(\App\Helpers\TipoCampoHelper::$tipos as $key => $value)
                <option value="{{ $key }}" @if(isset($lbtaxfull) && $lbtaxfull->tipo_campo == $key) selected @endif>{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>

<hr style="margin: 20px 0;">

<!-- Chave Campo Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="chave_campo">Chave Campo:</label>
        <input type="text"
         style="--w-input: 98%;"
         name="chave_campo" id="chave_campo" class="form-control" value="{{ $lbtaxfull->chave_campo ?? '' }}">
    </div>
</div>

<!-- Descricao Chave Campo Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="descricao_chave_campo">Descricao Chave Campo:</label>
        <input type="text"
         style="--w-input: 98%;"
         name="descricao_chave_campo" id="descricao_chave_campo" class="form-control" value="{{ $lbtaxfull->descricao_chave_campo ?? '' }}">
    </div>
</div>

<!-- Info Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="info">Info:</label>
        <input type="text"
         style="--w-input: 98%;"
         name="info" id="info" class="form-control" value="{{ $lbtaxfull->info ?? '' }}">
    </div>
</div>