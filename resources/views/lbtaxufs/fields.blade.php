<div class="field-row">
    <div class="search-input input input-float" style="flex: 2;">
        <select name="uf" id="uf" class="form-control">
            <option value="">UF</option>
            @foreach(\App\Helpers\UfsHelper::$ufs as $key => $value)
                <option value="{{ $key }}" {{ $lbtaxuf->uf == $key ? 'selected' : '' }}>{{ $value }}</option>
            @endforeach
        </select>
    </div>
    <div class="search-input input input-float" style="flex: 2;">
        <label class="label-float" for="imposto">Imposto:</label>
        <select name="imposto" id="imposto" class="form-control">
            @foreach(\App\Helpers\ImpostoHelper::$impostos as $key => $value)
            <option value="{{ $key }}" {{ $lbtaxuf->imposto == $key ? 'selected' : '' }}>{{ $value }}</option>
            @endforeach
        </select>
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="ordem">Ordem:</label>
        <input type="text" name="ordem" id="ordem" class="form-control" value="{{ $lbtaxuf->ordem ?? '' }}">
    </div>
</div>

<!-- Legislacao Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="legislacao">Legislacao:</label>
        <input style="--w-input: 99%;" type="text" name="legislacao" id="legislacao" class="form-control" value="{{ $lbtaxuf->legislacao ?? '' }}">
    </div>
</div>