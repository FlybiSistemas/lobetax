<script>
    var colunaCount = $('.coluna-div').length;

    function addColuna(){
        var clone = $("#coluna_clone").clone();
        var htmlId = 'coluna[' + colunaCount + ']';
        var coluna = $('#colunas').find('option:selected')

        div = clone.find('.card-vertical');

        clone.attr('id', 'coluna'+colunaCount);
        div.attr('id', 'row'+colunaCount);
        div.attr('class', 'card-vertical');

        clone.find('p').html(coluna.text()+clone.find('p').html())
        clone.find('input').val(coluna.val());
        clone.find('input').attr('name', htmlId );
        clone.find('img').attr('onclick', 'removeColuna(' + colunaCount + ')');
        $('#coluna-list').append(clone)
        
        clone.show();
        colunaCount++;
        criar_ordenacao();
    }

    function removeColuna(idx){
        $('#coluna' + idx).remove();
        colunaCount--;
    }

    $(document).ready(function() {
        criar_ordenacao();
    });

    function criar_ordenacao(){
        var lista = document.getElementById('coluna-list');
        if(window.sortable) {
            window.sortable.destroy();
        }
        window.sortable = Sortable.create(lista, {
            onSort: function (evt) {
                colunas = [];
                $('#coluna-list>.coluna-div').each(function(index, element){
                    colunas.push($(element).find('input').val());
                });
                $.post('{{ route('tabelas.ordenaColunas') }}',
                    {
                        'colunas' :colunas,
                        '_token' : '{{ csrf_token() }}',
                        'tabela_id' : '{{ $tabela->id }}'
                    },
                    function(returnedData){
                        console.log(returnedData);
                    }
                );
            }
        });
    }

</script>
<!-- Nome Field -->
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="nome">Nome:</label>
        <input type="text" name="nome" id="nome" class="form-control" value="{{ $tabela->nome ?? '' }}">
    </div>
</div>
<div class="field-row">
    <div class="search-input input input-float" style="flex: 1;">
        <label class="label-float" for="colunas">Coluna</label>
        <select id="colunas" class="form-control">
            <option value="">-</option>
            @foreach($colunas as $coluna)
                <option value="{{ $coluna->id }}">{{ $coluna->nome }}</option>
            @endforeach
        </select>
    </div>
    <button onclick="addColuna()" type="button" class="button blue" style="margin: 0px 10px;">
        <span>+</span>
    </button>
</div>
<div id="coluna-list">
    @if(isset($tabela))
        @if($tabela->colunas->count() > 0)
            @foreach($colunasTabela as $i => $coluna)
                <div id="coluna{{$i}}" data-idx="{{$i}}" class="coluna-div">
                    @include('tabelas.coluna', ['coluna' => $coluna, 'i' => $i])
                </div>
            @endforeach
        @endif
    @endif
</div>

<style>
    .card-vertical {
        width: 30px;
        float: left;
        white-space: nowrap;
        rotate: 90deg;
        margin: 0 2px;
    }

    .card-vertical span {
        display: flex;
        width: 150px;
        text-align: center;
        border: solid 1px;
        padding: 2px 0;
        background-image: linear-gradient(193deg, #1e8deb, #100d28);
        color: white;
        align-items: center;
    }

    .card-vertical p {
        width: 100%;
    }

    .card-vertical img {
        width: 17px;
        margin-right: 4px;
    }
    #coluna-list {
        height: 150px;
        margin: 20px 0 0 20px;
    }

    .coluna-div {
        height: 100%;
        float: left;
    }
     
</style>