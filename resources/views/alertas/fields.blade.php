<!-- Model Name Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
                    <label class="label-float" for="model_name">Model Name:</label>
                <input type="text" name="model_name" id="model_name" class="form-control" value="{{ $alerta->model_name ?? '' }}">
    </div>
</div>

<!-- Model Id Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
                    <label class="label-float" for="model_id">Model Id:</label>
                <input type="text" name="model_id" id="model_id" class="form-control" value="{{ $alerta->model_id ?? '' }}">
    </div>
</div>

<!-- Descricao Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
                    <label class="label-float" for="descricao">Descricao:</label>
                <input type="text" name="descricao" id="descricao" class="form-control" value="{{ $alerta->descricao ?? '' }}">
    </div>
</div>

<!-- Valor Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
                    <label class="label-float" for="valor">Valor:</label>
                <input type="text" name="valor" id="valor" class="form-control" value="{{ $alerta->valor ?? '' }}">
    </div>
</div>

<!-- Rota Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
                    <label class="label-float" for="rota">Rota:</label>
                <input type="text" name="rota" id="rota" class="form-control" value="{{ $alerta->rota ?? '' }}">
    </div>
</div>