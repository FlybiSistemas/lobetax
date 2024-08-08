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

    $('#tipo_coluna').on('change', function(){
        $aux = this.value;
        $('.modo').fadeOut();
        $('.modo-' + $aux).fadeIn();
    })

    $('#model_name').on('change', function() {
        modelSearch = this.value;
        var url = '{{ route("colunas.searchModelFillable", "") }}/' + modelSearch;
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function(data, textStatus, jqXHR) {
                const selectElement = document.getElementById('buscar_name');

                selectElement.innerHTML = '';

                const valueEmpty = document.createElement('option');
                valueEmpty.value = '';
                valueEmpty.textContent = '-';
                selectElement.appendChild(valueEmpty);

                const subrelacaoOption = document.createElement('option');
                subrelacaoOption.value = 'subrelacao';
                subrelacaoOption.textContent = 'Subrelação';
                selectElement.appendChild(subrelacaoOption);

                const subrelacaoOption2 = document.createElement('option');
                subrelacaoOption2.value = 'subrelacao_2';
                subrelacaoOption2.textContent = 'Subrelação 2';
                selectElement.appendChild(subrelacaoOption2);

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

    $('#buscar_name').on('change', function() {
        if(this.value == 'subrelacao' || this.value == 'subrelacao_2'){
            if(this.value == 'subrelacao'){
                $('#subrelacao_1').css('display', 'block')
                $('#subrelacao_2').css('display', 'none')
            }
            else{
                $('#subrelacao_1').css('display', 'none')
                $('#subrelacao_2').css('display', 'block');
            }
            $('#subrelacao-list').fadeIn();
            var url = '{{ route("colunas.searchModelRelations", "") }}/' + modelSearch;
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'json',
                success: function(data, textStatus, jqXHR) {
                    const selectElement = document.getElementById('subrelacao_name');
    
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
        <label class="label-float" for="tipo_coluna">Tipo de Campo</label>
        <select name="tipo_coluna" id="tipo_coluna" class="form-control">
            @foreach(App\Helpers\TipoColunaHelper::$tipos as $key => $value)
                <option value="{{ $key }}" @if(isset($coluna) && $coluna->tipo_coluna == $key) selected @endif>{{ $value }}</option>
            @endforeach
        </select>
    </div>
</div>
<div class="modo modo-r" @if(isset($coluna)) @if($coluna->tipo_coluna == 'r' || $coluna->tipo_coluna == '') style="display: block;" @else style="display: none;" @endif @else style="display: block;" @endif>
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

<div class="modo modo-b" @if(isset($coluna)) @if($coluna->tipo_coluna == 'b') style="display: block;" @else style="display: none;" @endif @else style="display: none;" @endif>
    <div class="field-row">
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="coluna_id">Coluna XML</label>
            <select name="coluna_id" class="form-control">
                <option value="">-</option>
                @foreach($colunas as $col)
                    <option value="{{ $col->id }}" @if(isset($coluna) && $coluna->coluna_id == $col->id) selected @endif>{{ $col->nome }}</option>
                @endforeach
            </select>
        </div>
        
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="model_name">Models</label>
            <select name="model_name" id="model_name" class="form-control">
                <option value="">-</option>
                @foreach($modelsToUse as $model)
                    <option value="{{ $model }}" @if(isset($coluna) && $coluna->model_name == $model) selected @endif>{{ $model }}</option>
                @endforeach
            </select>
        </div>
        
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="buscar_name">Buscar</label>
            <select name="buscar_name" id="buscar_name" class="form-control">
                <option value="">-</option>
                @if(isset($coluna) && $coluna->buscar_name != null)
                    <option value="{{ $coluna->buscar_name }}" selected>{{ str_replace(' ', '_', ucfirst($coluna->buscar_name)) }}</option>
                @endif
            </select>
        </div>
    </div>

    <div id="subrelacao-list" class="field-row" @if(isset($coluna) && $coluna->buscar_name != null) '' @else style="display: none;" @endif>
        <div class="search-input input input-float" style="flex: 1;@if(isset($coluna) && $coluna->buscar_name == 'subrelacao') display: block; @else display: none; @endif>{{ $col->nome }}" id="subrelacao_1">
            <label class="label-float" for="coluna_id2">Coluna XML 2</label>
            <select id="coluna_id2" name="coluna_id2" class="form-control">
                <option value="">-</option>
                @foreach($colunas as $col)
                    <option value="{{ $col->id }}" @if(isset($coluna) && $coluna->coluna_id2 == $col->id) selected @endif>{{ $col->nome }}</option>
                @endforeach
            </select>
        </div>

        <div class="search-input input input-float" style="flex: 1;@if(isset($coluna) && $coluna->buscar_name == 'subrelacao_2') display: block; @else display: none; @endif" id="subrelacao_2">
            <label class="label-float" for="subrelacao_extra">Dados Empresa</label>
            <select name="subrelacao_extra" class="form-control">
                <option value="">-</option>
                <option value="cnaes_empresa" @if(isset($coluna) && $coluna->subrelacao_extra == 'cnaes_empresa') selected @endif>CNAE (EMPRESA)</option>
            </select>
        </div>

        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="subrelacao_name">Relações</label>
            <select name="subrelacao_name" id="subrelacao_name" class="form-control" style="--w-input: 98%;">
                <option value="">-</option>
                @if(isset($coluna) && $coluna->subrelacao_name != null)
                    <option value="{{ $coluna->subrelacao_name }}" selected>{{ str_replace(' ', '_', ucfirst($coluna->subrelacao_name)) }}</option>
                @endif
            </select>
        </div>
    </div>

    <div class="field-row">
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="verdadeiro">Verdadeiro</label>
            <input type="text" name="verdadeiro" id="verdadeiro" class="form-control" value="{{ $coluna->verdadeiro ?? '' }}">
        </div>
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="falso">Falso</label>
            <input type="text" name="falso" id="falso" class="form-control" value="{{ $coluna->falso ?? '' }}">
        </div>
    </div>
</div>