<script>
    var referenciaCount = 0;

    function addReferencia(){
        var clone = $("#referencia_clone").clone();
        var htmlId = 'referenciax[' + referenciaCount + ']';
        div = clone.find('.field-row');
        label = clone.find('.label-float');
        input = clone.find('.form-control');

        div.attr('id', htmlId + '[new]');
        input.attr('name', htmlId + '[new]');
        $('#referencia-list').append(clone)
        
        clone.show();
        referenciaCount++;
    }
</script>
<div class="field-row" style="padding-bottom: 5px;">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="nome">Nome</label>
        <input type="text" name="nome" id="nome" class="form-control" value="{{ $coluna->nome ?? '' }}">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="formato">Formatação</label>
        <input type="text" name="formato" id="formato" class="form-control" value="{{ $coluna->formato ?? ''}}">
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

</div>