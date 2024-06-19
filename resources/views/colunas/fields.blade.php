<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="nome">Nome</label>
        <input type="text" name="nome" id="nome" class="form-control" value="{{ $coluna->nome ?? '' }}">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="referencia">Referência</label>
        <input type="text" name="referencia" id="referencia" class="form-control" value="{{ $coluna->referencia ?? ''}}">
    </div>
</div>