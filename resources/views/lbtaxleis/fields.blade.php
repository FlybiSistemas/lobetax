<style>
    .field-row.chkr .label-float {
        left: 50%;
        transform: translateX(-50%);
    }
</style>

<div class="field-row">
    <!-- Imposto Field -->
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="imposto">Imposto:</label>
        <input type="text" name="imposto" id="imposto" class="form-control" value="{{ $lbtaxlei->imposto ?? '' }}">
    </div>
    <!-- Cod Field -->
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="cod">Cod:</label>
        <input type="text" name="cod" id="cod" class="form-control" value="{{ $lbtaxlei->cod ?? '' }}">
    </div>
</div>

<!-- Bsl Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="bsl">Base Legal:</label>
        <input type="text" name="bsl" id="bsl" class="form-control" value="{{ $lbtaxlei->bsl ?? '' }}" style="--w-input: 98%;">
    </div>
</div>

<input type="hidden" name="chave" id="chave" value="{{ $lbtaxlei->chave ?? '' }}">

<div style="padding-top: 1rem;margin-bottom: 1rem;border-bottom: 1px solid #e9ecef;">
    Validações
</div>

<div class="field-row chkr">
    @php $break = true; @endphp
    @foreach(\App\Helpers\TipoCampoHelper::$tipos as $key => $value)
        @if($loop->index >= count(\App\Helpers\TipoCampoHelper::$tipos) / 2 && $break)
            @php $break = false; @endphp
            </div>
            <div class="field-row chkr">
        @endif
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="{{ $key }}">{{ $value }}</label>
            <input type="checkbox" id="{{ $key }}" class="form-control chk">
        </div>
    @endforeach
</div>

<script>
    $('#form').on('submit', function(e) {
        e.preventDefault();
        chaves = $('.chk')
            .map(function() {
                if(this.checked)
                    return 'S';
                else
                    return 'N';
            })
            .get();
        $('#chave').val(chaves.join(''));
    });
</script>