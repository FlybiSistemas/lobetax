<div class="field-row" id="row{{ $i }}" data-idx="{{ $i }}">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="cnae">Cnae:</label>
        <select name="cnae[{{ $i }}]" id="cnae" class="form-control" readonly >
            <option value="{{ isset($cnae) ? $cnae->id : '' }}">{{ isset($cnae) ? $cnae->codigo : '' }}</option>
        </select>
    </div>
    @if($cnae)
        <button onclick="removeCnae({{ $i }})" type="button" class="button red" style="margin: 0px 10px;">
            <img src="{{ asset('img/new/icons/mines.ico') }}" alt="" style="width: 15px;">
        </button>
    @endif
</div>

<div class="field-row" id="row_{{ $i }}" data-idx="{{ $i }}">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="cnae_clone">Cnae:</label>
        <select class="form-control" readonly>
            <!-- Option será preenchido pelo script -->
        </select>
    </div>
    <button onclick="removeCnae(cnaeCount)" type="button" class="button red" style="margin: 0px 10px;">
        <img src="{{ asset('img/new/icons/mines.ico') }}" alt="" style="width: 15px;">
    </button>
</div>
