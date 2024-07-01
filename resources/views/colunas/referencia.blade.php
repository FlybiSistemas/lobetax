<div class="field-row" id="row{{ $i }}" data-idx="{{ $i }}">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="referenciax">Referência Aux</label>
        <input type="text" name="referenciax[{{ $i }}]" class="form-control" value="{{$referencia ? $referencia->referencia : ''}}" style="--w-input: {{$referencia ? '100%' : '97%'}};">
    </div>
    @if($referencia)
        <button onclick="removeReferencia({{ $i }})" type="button" class="button red" style="margin: 0px 10px;">
            <span>-</span>
        </button>
    @endif
</div>