<script>
    var categoriaCount = $('.categoria-div').length;

    function removeCategoria(idx){
        $('#row_categoria_' + idx).remove();
        categoriaCount--;
    }

    function addCategoria(){
        var selectedOption = $('#categoria_id').find(':selected');
        var value = selectedOption.val();
        var categoria = selectedOption.text();

        if (value && categoria) {
            var rowHtml = `
                <tr id="row_categoria_${categoriaCount}">
                    <td>${categoria}</td>
                    <td style="text-align: center;float: right;">
                        <div onclick="removeCategoria(${categoriaCount})" style="width: 20px; cursor: pointer;">
                            <img src="{{ asset('img/new/icons/trash.ico') }}" style="width: 20px;">
                        </div>
                    </td>
                    <input type="hidden" name="categoria[${categoriaCount}]" value="${value}">
                </tr>
            `;

            // Adiciona a nova linha ao tbody
            $('#categoria-list').append(rowHtml);

            // Limpa a seleção
            $('#categoria_id').val('').trigger('change');

            categoriaCount++;
            Utils.ajustarColunas('#table2');
        } else {
            alert('Selecione um item primeiro!');
        }
    }
</script>
<div class="field-row">
    <!-- Cnpj Field -->
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="cnpj">Cnpj:</label>
        <input type="text" name="cnpj" id="cnpj" class="form-control" value="{{ App\Helpers\FormatterHelper::formatCnpjCpf($participante->cnpj) ?? '' }}">
    </div>
    <!-- Natureza Field -->
    <div class="search-input input input-float" style="flex: 2;">
        <label class="label-float" for="natureza">Natureza:</label>
        <input type="text" name="natureza" id="natureza" class="form-control" value="{{ $participante->natureza ?? '' }}">
    </div>
</div>

<div class="field-row">    
    <!-- Razao Social Field -->
    <div class="search-input input input-float" style="flex: 2;">
        <label class="label-float" for="razao_social">Razao Social:</label>
        <input type="text"
         name="razao_social"
         id="razao_social"
         class="form-control"
         style="width: 97%;"
         value="{{ $participante->razao_social ?? '' }}">
    </div>
</div>

<x-options-table >
    <x-option-to-table :name="'categorias'" :buttonClass="'blue'">
        <div class="field-row">
            <div class="search-input input input-float" style="flex: 1;">
                <label class="label-float" for="categoria_id">Categoria:</label>
                <select id="categoria_id" class="form-control">
                    <option value="">-</option>
                    @foreach($categorias as $categoria)
                        <option value="{{$categoria->id}}">{{ App\Helpers\CategoriaHelper::get($categoria->categoria) }}</option>
                    @endforeach
                </select>
            </div>
            <button onclick="addCategoria()" type="button" class="button blue">
                Adicionar <img src="{{ asset('img/new/icons/plus.ico') }}" alt="" style="width: 15px;">
            </button>
        </div>
        <div class="field-row">
            <table class="table-list" id="table2">
                <thead>
                    <tr class="titulos" style="display: contents;">
                        <th>Nome</th>
                        <th class="ac"></th>
                    </tr>
                </thead>
                <tbody style="display: block;" id="categoria-list">
                    @if(isset($participante) && $participante->categorias)
                        @foreach($participante->categorias as $i => $categoria)
                            <tr id="row_categoria_{{ $i }}" class="categoria-div">
                                <td>{{ App\Helpers\CategoriaHelper::get($categoria->categoria) }}</td>
                                <td style="text-align: center;float: right;">
                                    <div onclick="removeCategoria({{$i}})" style="width: 20px; cursor: pointer;">
                                        <img src="{{ asset('img/new/icons/trash.ico') }}" style="width: 20px;">
                                    </div>
                                </td>
                                <input type="hidden" name="categoria[{{$i}}]" value="{{ $categoria->id }}">
                            </tr>
                        @endforeach
                    @endif             
                </tbody>
            </table>
        </div>
    </x-option-to-table>

    <x-option-to-table :name="'CNAES'">
        <table class="table-list">
            <thead>
                <tr class="titulos" style="display: contents;">
                    <th>Categoria</th>
                    <th>Descrição</th>
                </tr>
            </thead>
            <tbody style="display: block;" id="cnae-list">
                @if(isset($participante))
                    @foreach($participante->cnaes as $i => $cnae)
                        <tr id="row_{{ $i }}">
                            <td>{{ $cnae->codigo }}</td>
                            <td>{{ substr($cnae->descricao, 0, 75) }} {{ strlen($cnae->descricao) > 75 ? '...' : '' }}</td>
                        </tr>
                    @endforeach
                @endif             
            </tbody>
        </table>
    </x-option-to-table>

</x-options-table>



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
        height: 350px;
        overflow-y: auto;
        width: 100vw;
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