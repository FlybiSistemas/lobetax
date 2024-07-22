<script>
    var cnaeCount = $('.cnae-div').length;

    function addCnae(){
        // pegar o option que esta selecionado no select com id cnae
        var cnaeSelected = $("#cnae option:selected")
        var clone = $("#cnae_clone").clone();
        var htmlId = 'cnae[' + cnaeCount + ']';
        
        div = clone.find('.field-row');
        label = clone.find('.label-float');
        input = clone.find('.form-control');
        
        input.find('option').val(cnaeSelected.val());
        input.find('option').text(cnaeSelected.text());

        div.attr('id', htmlId + '[cnae]');
        input.attr('name', htmlId);
        $('#cnae-list').append(clone)
        
        $("#cnae").val("");
        clone.show();
        cnaeCount++;
    }

    function removeCnae(idx){
        $('#cnae' + idx).remove();
        cnaeCount--;
    }
</script>
<!-- Codigo Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 2;">
        <label class="label-float" for="codigo">Codigo:</label>
        <input type="text" name="codigo" id="codigo" class="form-control" value="{{ $ncm->codigo ?? '' }}">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="tipo">Tipo:</label>
        <select name="tipo" id="tipo" class="form-control">
            @foreach(\App\Helpers\TributacaoNcmHelper::$values as $key => $value)
                <option value="{{ $key }}">{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>

<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="cnae">Cnae:</label>
        <select id="cnae" class="form-control">
            <option value="">-</option>
            @foreach($cnaes as $cnae)
                <option value="{{ $cnae->id }}">{{ $cnae->codigo }}</option>
            @endforeach
        </select>
    </div>
    <button onclick="addCnae()" type="button" class="button blue" style="margin: 0px 10px;">
        <span>+</span>
    </button>
</div>
<div id="cnae-list">
    @if(isset($ncm))
        @if($ncm->cnaes->count() > 0)
            @foreach($ncm->cnaes as $i => $cnae)
                <div id="cnae{{$i}}" data-idx="{{$i}}" class="cnae-div">
                    @include('ncms.cnae', ['cnae' => $cnae, 'i' => $i])
                </div>
            @endforeach
        @endif
    @endif
</div>