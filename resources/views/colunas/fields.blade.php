<script>
    var referenciaCount = $('.referencia-div').length;

    function addReferencia(){
        var clone = $("#referencia_clone").clone();
        var htmlId = 'referenciax[' + referenciaCount + ']';
        div = clone.find('.field-row');
        label = clone.find('.label-float');
        input = clone.find('.form-control');

        div.attr('id', htmlId + '[referencia]');
        input.attr('name', htmlId + '[referencia]');
        $('#referencia-list').append(clone)
        
        clone.show();
        referenciaCount++;
    }

    function removeReferencia(idx){
        $('#referencia' + idx).remove();
    }
</script>
<div class="field-row" style="padding-bottom: 5px;">
    <div class="search-input input input-float" style="flex: 2;">
        <label class="label-float" for="nome">Nome</label>
        <input type="text" name="nome" id="nome" class="form-control" value="{{ $coluna->nome ?? '' }}">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="referencia_campo">Tipo de Campo</label>
        <select name="referencia_campo" id="referencia_campo" class="form-control">
            <option value="">-</option>
            @foreach(\App\Helpers\TipoCampoHelper::$tipos as $key => $value)
                <option value="{{ $key }}" @if(isset($coluna) && $coluna->referencia_campo == $key) selected @endif>{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="referencia">Referência</label>
        <input type="text"
          name="referencia"
          id="referencia"
          class="form-control"
          value="{{ $coluna->referencia ?? ''}}"
          style="--w-input: 100%">
    </div>
    <button onclick="addReferencia()" type="button" class="button blue" style="margin: 0px 10px;">
        <span>+</span>
    </button>
</div>
<div id="referencia-list">
    @if($coluna)
        @if($coluna->referencias->count() > 0)
            @foreach($coluna->referencias as $i => $referencia)
                <div id="referencia{{$i}}" data-idx="{{$i}}" class="referencia-div">
                    @include('colunas.referencia', ['referencia' => $referencia, 'i' => $i])
                </div>
            @endforeach
        @endif
    @endif
</div>