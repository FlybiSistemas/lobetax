<!-- Uf Field -->
<div class="form-group col-sm-6">
    <div class="search-input input input-float" style="flex: 1;">
        <select name="uf" id="uf" class="form-control">
            <option value="">UF</option>
            @foreach(\App\Helpers\UfsHelper::$ufs as $key => $value)
                <option value="{{ $key }}">{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>

<!-- Imposto Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="imposto">Imposto:</label>
        <input type="text" name="imposto" id="imposto" class="form-control" value="{{ $lbtaxuf->imposto ?? '' }}">
    </div>
</div>

<!-- Ordem Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="ordem">Ordem:</label>
        <input type="text" name="ordem" id="ordem" class="form-control" value="{{ $lbtaxuf->ordem ?? '' }}">
    </div>
</div>

<!-- Legislacao Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="legislacao">Legislacao:</label>
        <input type="text" name="legislacao" id="legislacao" class="form-control" value="{{ $lbtaxuf->legislacao ?? '' }}">
    </div>
</div>