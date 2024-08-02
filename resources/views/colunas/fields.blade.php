<script>
    var referenciaCount = $('.referencia-div').length;
    var modelSearch;

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
        referenciaCount--;
    }

    $('#tipo_campo').on('change', function(){
        $aux = this.value;
        $('.modo').fadeOut();
        $('.modo-' + $aux).fadeIn();
    })

    $('#modelsToUse').on('change', function() {
        modelSearch = this.value;
        var url = '{{ route("colunas.searchModelFillable", "") }}/' + modelSearch;
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(data, textStatus, jqXHR) {
                const selectElement = document.getElementById('subSearch');

                selectElement.innerHTML = '';

                const valueEmpty = document.createElement('option');
                valueEmpty.value = '';
                valueEmpty.textContent = '-';
                selectElement.appendChild(valueEmpty);

                const subrelacaoOption = document.createElement('option');
                subrelacaoOption.value = 'subrelacao';
                subrelacaoOption.textContent = 'Subrelação';
                selectElement.appendChild(subrelacaoOption);

                data.forEach((value) => {
                    const option = document.createElement('option');
                    option.value = value;
                    textOption = value[0].toUpperCase() + value.substr(1);
                    textOption = textOption.replace(/_/g, ' ');
                    option.textContent = textOption;
                    selectElement.appendChild(option);
                });
            },
            error: function(jqXHR, textStatus, errorThrown) {
                Ajax.tratarErroAjax(jqXHR.status, jqXHR);
            }
        });
    });

    $('#subSearch').on('change', function() {
        if(this.value == 'subrelacao'){
            debugger;
            $('#subrelacao-list').fadeIn();
            var url = '{{ route("colunas.searchModelRelations", "") }}/' + modelSearch;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function(data, textStatus, jqXHR) {
                    const selectElement = document.getElementById('relacoes');
    
                    selectElement.innerHTML = '';
    
                    const valueEmpty = document.createElement('option');
                    valueEmpty.value = '';
                    valueEmpty.textContent = '-';
                    selectElement.appendChild(valueEmpty);
    
                    data.forEach((value) => {
                        const option = document.createElement('option');
                        option.value = value;
                        textOption = value[0].toUpperCase() + value.substr(1);
                        textOption = textOption.replace(/_/g, ' ');
                        option.textContent = textOption;
                        selectElement.appendChild(option);
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    Ajax.tratarErroAjax(jqXHR.status, jqXHR);
                }
            });
        }
        else{
            $('#subrelacao-list').fadeOut();
        }
    });
</script>

<div class="field-row" style="padding-bottom: 5px;">
    <div class="search-input input input-float" style="flex: 2;">
        <label class="label-float" for="nome">Nome</label>
        <input type="text" name="nome" id="nome" class="form-control" value="{{ $coluna->nome ?? '' }}">
    </div>
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="tipo_campo">Tipo de Campo</label>
        <select name="tipo_campo" id="tipo_campo" class="form-control">
            <option value="referencia">Referencia</option>
            <option value="busca">Busca</option>
        </select>
    </div>
</div>
<div class="modo modo-referencia">
    <div class="field-row">
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="referencia_campo">Campo</label>
            <select name="referencia_campo" id="referencia_campo" class="form-control">
                <option value="">-</option>
                @foreach(\App\Helpers\TipoCampoHelper::$tipos as $key => $value)
                    <option value="{{ $key }}" @if(isset($coluna) && $coluna->referencia_campo == $key) selected @endif>{{ $value }}</option>
                @endforeach
            </select>
        </div>
        <div class="search-input input input-float" style="flex: 2;">
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
</div>

<div class="modo modo-busca" style="display: none;">
    <div class="field-row">
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="col_xml">Coluna XML</label>
            <select name="col_xml" id="col_xml" class="form-control">
                <option value="">-</option>
                @foreach($colunas as $coluna)
                    <option value="{{ $coluna->id }}" @if(isset($coluna) && $coluna->id == $coluna->id) selected @endif>{{ $coluna->nome }}</option>
                @endforeach
            </select>
        </div>
        
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="modelsToUse">Models</label>
            <select name="modelsToUse" id="modelsToUse" class="form-control">
                <option value="">-</option>
                @foreach($modelsToUse as $model)
                    <option value="{{ $model }}" @if(isset($model) && $model == $coluna->model) selected @endif>{{ $model }}</option>
                @endforeach
            </select>
        </div>
        
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="subSearch">Buscar</label>
            <select name="subSearch" id="subSearch" class="form-control">
                <option value="">-</option>
            </select>
        </div>
    </div>

    <div id="subrelacao-list" class="field-row" style="display: none;">
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="relacoes">Relações</label>
            <select name="relacoes" id="relacoes" class="form-control">
                <option value="">-</option>
            </select>
        </div>
    </div>

    <div class="field-row">
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="verdadeiro">Verdadeiro</label>
            <input type="text" name="verdadeiro" id="verdadeiro" class="form-control" value="">
        </div>
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="falso">Falso</label>
            <input type="text" name="falso" id="falso" class="form-control" value="">
        </div>
    </div>
</div>