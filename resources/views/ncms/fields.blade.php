<script>
    var cnaeCount = $('.cnae-div').length;

    function addCnae(){
        var selectedOption = $('#cnae_id').find(':selected');
        var value = selectedOption.val();
        var text = selectedOption.text();
        var [cnae, descricao] = text.split('|').map(part => part.trim());
        descricao = descricao.length > 75 ? descricao.substring(0, 75) + '...' : descricao;

        if (value && text) {
            var rowHtml = `
                <tr id="row_${cnaeCount}">
                    <td>${cnae}</td>
                    <td>${descricao}</td>
                    <td style="text-align: center;">
                        <div onclick="removeCnae(${cnaeCount})" style="width: 20px; cursor: pointer;">
                            <img src="{{ asset('img/new/icons/trash.ico') }}" style="width: 20px;">
                        </div>
                    </td>
                    <input type="hidden" name="cnae[${cnaeCount}]" value="${value}">
                </tr>
            `;

            // Adiciona a nova linha ao tbody
            $('#cnae-list').append(rowHtml);

            // Limpa a seleção
            $('#cnae_id').val('').trigger('change');

            cnaeCount++;
            Utils.ajustarColunas('#table2');
        } else {
            alert('Selecione um item primeiro!');
        }
    }

    function removeCnae(idx){
        $('#row_' + idx).remove();
        cnaeCount--;
    }



</script>
<!-- Codigo Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 2;">
        <label class="label-float" for="codigo">Codigo:</label>
        <input type="text" name="codigo" id="codigo" class="form-control" value="@if(isset($ncm)){{ $ncm->codigo }} @elseif(isset($codigo)) {{ $codigo }} @endif">
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
    <div class="search-input input input-float" style="flex: 1;" id="search_cnae">
        <label class="label-float" for="cnae_id">Cnae:</label>
        <select id="cnae_id" class="form-control">
            <option value="">-</option>
        </select>
    </div>
    <button onclick="addCnae()" type="button" class="button blue">
        Adicionar <img src="{{ asset('img/new/icons/plus.ico') }}" alt="" style="width: 15px;">
    </button>
</div>
<table class="table-list" id="table2">
    <thead>
        <tr class="titulos" style="display: contents;">
            <th>Cnae</th>
            <th>Descrição</th>
            <th></th>
        </tr>
    </thead>
    <tbody style="display: block;"id="cnae-list">
        @if(isset($ncm))
            @foreach($ncm->cnaes as $i => $cnae)
                <tr id="row_{{ $i }}">
                    <td>{{ $cnae->codigo }}</td>
                    {{-- <td>{{ $cnae->descricao }}</td> --}}
                    <td>{{ substr($cnae->descricao, 0, 75) }} {{ strlen($cnae->descricao) > 75 ? '...' : '' }}</td>
                    <td style="text-align: center;">
                        <div onclick="removeCnae({{ $i }})" style="width: 20px;">
                            <img src="{{ asset('img/new/icons/trash.ico') }}">
                        </div>
                    </td>
                    <input type="hidden" name="cnae[{{ $i }}]" value="{{ $cnae->id }}">
                </tr>
            @endforeach
        @endif             
    </tbody>
</table>

<style>
    .select2-container {
        border: solid 1px #00000014;
        width: 95% !important;
        border-radius: 20px;
        padding: 7px;
    }

    #cnae-list {
        border-radius: 20px;
        padding: 10px;
    }
</style>

<script>    
    $(document).ready(function() {
        Filtro.inicializaCampoBusca("{{ route('cnaes.find') }}", $("#cnae_id"),
        "", "#search_cnae");

        setTimeout(() => {
            Utils.ajustarColunas('#table2');
        }, 200);
    });
</script>