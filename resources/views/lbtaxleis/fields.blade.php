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

<!-- Chave Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="ncm">NCM</label>
        <input type="checkbox" id="ncm" class="form-control chk">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="cest">CEST</label>
        <input type="checkbox" id="cest" class="form-control chk">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="ufo">UFO</label>
        <input type="checkbox" id="ufo" class="form-control chk">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="ufd">UFD</label>
        <input type="checkbox" id="ufd" class="form-control chk">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="cfo">CFOP</label>
        <input type="checkbox" id="cfo" class="form-control chk">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="ori">ORI</label>
        <input type="checkbox" id="ori" class="form-control chk">
    </div>
</div>
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="flx">FLX</label>
        <input type="checkbox" id="flx" class="form-control chk">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="tpd">TPD</label>
        <input type="checkbox" id="tpd" class="form-control chk">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="muo">MUO</label>
        <input type="checkbox" id="muo" class="form-control chk">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="mud">MUD</label>
        <input type="checkbox" id="mud" class="form-control chk">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="pjo">CNPJO</label>
        <input type="checkbox" id="pjo" class="form-control chk">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="pjd">CNPJD</label>
        <input type="checkbox" id="pjd" class="form-control chk">
    </div>
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