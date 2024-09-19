<div style="overflow-x: unset;">
    <table class="table-list">
        <thead>
            <tr class="titulos" style="display: contents;">
                <th>Chave <img class="icon-grey filter-icon filter_chave" src="{{ isset($searchData['filter_chave']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th>Imposto <img class="icon-grey filter-icon filter_imposto" src="{{ isset($searchData['filter_imposto']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th>Chave Lei <img class="icon-grey filter-icon filter_chave_lei" src="{{ isset($searchData['filter_chave_lei']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th>Descricao <img class="icon-grey filter-icon filter_descricao" src="{{ isset($searchData['filter_descricao']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th>Tipo Campo <img class="icon-grey filter-icon filter_tipo_campo" src="{{ isset($searchData['filter_tipo_campo']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th>Chave Campo <img class="icon-grey filter-icon filter_chave_campo" src="{{ isset($searchData['filter_chave_campo']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th>Desc. Chave <img class="icon-grey filter-icon filter_descricao_chave_campo" src="{{ isset($searchData['filter_descricao_chave_campo']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th>Info <img class="icon-grey filter-icon filter_info" src="{{ isset($searchData['filter_info']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th width="100">Ações<img class="filter-icon" src="" alt=""></th>
            </tr>
            <tr>
                <th><input class="form-control" name="filter_chave" type="text" style="display:none;" value="{{ isset($searchData['filter_chave']) ? $searchData['filter_chave'] : '' }}"></th>
                <th><input class="form-control" name="filter_imposto" type="text" style="display:none;" value="{{ isset($searchData['filter_imposto']) ? $searchData['filter_imposto'] : '' }}"></th>
                <th><input class="form-control" name="filter_chave_lei" type="text" style="display:none;" value="{{ isset($searchData['filter_chave_lei']) ? $searchData['filter_chave_lei'] : '' }}"></th>
                <th><input class="form-control" name="filter_descricao" type="text" style="display:none;" value="{{ isset($searchData['filter_descricao']) ? $searchData['filter_descricao'] : '' }}"></th>
                <th><input class="form-control" name="filter_tipo_campo" type="text" style="display:none;" value="{{ isset($searchData['filter_tipo_campo']) ? $searchData['filter_tipo_campo'] : '' }}"></th>
                <th><input class="form-control" name="filter_chave_campo" type="text" style="display:none;" value="{{ isset($searchData['filter_chave_campo']) ? $searchData['filter_chave_campo'] : '' }}"></th>
                <th><input class="form-control" name="filter_descricao_chave_campo" type="text" style="display:none;" value="{{ isset($searchData['filter_descricao_chave_campo']) ? $searchData['filter_descricao_chave_campo'] : '' }}"></th>
                <th><input class="form-control" name="filter_info" type="text" style="display:none;" value="{{ isset($searchData['filter_info']) ? $searchData['filter_info'] : '' }}"></th>
                <th></th>
            </tr>
        </thead>
        <tbody style="display: block;">
            @if($lbtaxfulls->count() > 0)
                @foreach($lbtaxfulls as $lbtaxfull)
                <tr id="row_{{ $lbtaxfull->id }}">
                    <td>{{ $lbtaxfull->chave }}</td>
                    <td>{{ \App\Helpers\ImpostoHelper::get($lbtaxfull->imposto) }}</td>
                    <td>{{ $lbtaxfull->chave_lei }}</td>
                    <td>{{ $lbtaxfull->descricao }}</td>
                    <td>{{ \App\Helpers\TipoCampoHelper::get($lbtaxfull->tipo_campo) }}</td>
                    <td>{{ $lbtaxfull->chave_campo }}</td>
                    <td>{{ $lbtaxfull->descricao_chave_campo }}</td>
                    <td>{{ $lbtaxfull->info }}</td>
                    <td class="actions">
                        <div onclick="Tela.abrirJanela('{{ route('lbtaxfulls.edit', $lbtaxfull->id) }}', 'Visualizar', 'md')">
                            <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                        </div>
                        <div onclick="Tela.abrirJanelaExcluir('{{ route('lbtaxfulls.destroy', [$lbtaxfull->id]) }}?_token={{ csrf_token() }}', '{{ $lbtaxfull->id }}')">
                            <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                        </div>
                        <div class="border-b"></div>
                    </td>
                </tr>
                @endforeach
            @else
            <tr>
                <td colspan="4">Nenhum registro encontrado.</td>
            </tr>
            @endif
        </tbody>
    </table>
</div>
<div class="card-footer clearfix">
    <div class="float-right">
        @include('layouts.pagination', [
            'paginator' => $lbtaxfulls,
            'filtro' => '&' . http_build_query(request()->except('page')),
        ])
    </div>
</div>

<style>
    th input:focus{
        --tw-ring-shadow: #6b7280 !important;
        border-color: #6b7280 !important;
        border-top-color: rgb(107, 114, 128) !important;
        border-right-color: rgb(107, 114, 128) !important;
        border-bottom-color: rgb(107, 114, 128) !important;
        border-left-color: rgb(107, 114, 128) !important;
    }
    th input{
        width: 100%;
        font-weight: 500;
    }

    th img{
        width: 15px;
        float: right;
        margin-right: 10%;
    }
</style>

<script>
    Filtro.inicializaFormBusca("#form-invisible", "#divList", true);
    function tt(){
        let ths = $('.titulos>th');
        let tds = $('tbody>tr:first>td');

        ths.each(function(index) {
            let tdWidth = $(tds[index]).outerWidth();
            if (tdWidth < 100)
                tdWidth = 100;
            if ($(this).hasClass('ac'))
                tdWidth = 65;
            $(this).css('width', tdWidth);
        });

        $('tbody>tr>td').each(function() {
            let tdWidth = $(this).outerWidth();
            if (tdWidth < 100) {
                $(this).css('width', '100px');
            }
        });

        let telaWidth = $(window).width();
        let sidebarWidth = $('.sidebar').width();
        let contentWidth = telaWidth - sidebarWidth;
        $('.container').css('width', contentWidth - 20);
        $('tbody').css('display', 'contents');

        
        let thElements = document.querySelectorAll('.titulos th');
        let inputElements = document.querySelectorAll('thead tr:nth-child(2) th input');

        thElements.forEach((th, index) => {
            let filterIcon = th.querySelector('.filter-icon');
            let input = inputElements[index];

            th.addEventListener('click', () => {
                if (input.style.display === 'none') {
                    $(input).fadeIn();
                    $(input).focus();
                } else {
                    $(input).fadeOut();
                }
            });

            filterIcon.addEventListener('click', () => {
                if (filterIcon.src.includes('remove-filter.ico')) {
                    input.value = '';
                    $(input).fadeOut();
                    filterIcon.src = filterIcon.src.replace('remove-', '')
                    $('#formSearch input[name="' + input.name + '"]').remove();
                    $('#formSearch').submit();
                }
            });
        });

        inputElements.forEach((inputEl) => {
            const handleEvent = (el) => {
                const target = $(el.target);
                const name = target.attr('name');
                const value = target.val();
                if(value.length > 1){
                    let existingInput = $(`#formSearch input[name="${name}"]`);
                    
                    if (existingInput.length > 0) {
                        existingInput.val(value);
                    } else {
                        const newInput = $('<input>', {
                            type: 'hidden',
                            name: name,
                            value: value
                        });
                        $('#formSearch').append(newInput);
                    }
    
                    // Atualiza o ícone de filtro para "remove"
                    // let th = Array.from(thElements).find((th) => {
                    //     return $(th).find(`img.icon-grey.filter-icon.${name}`).length > 0;
                    // });
                    
                    // if (th) {
                    //     let filterIcon = th.querySelector('.filter-icon');
                    //     filterIcon.src = filterIcon.src.replace('filter', 'remove-filter')
                    // }
    
                    $('#formSearch').submit();
                }
            };

            inputEl.addEventListener('blur', handleEvent);
        });
    }
    $(document).ready(function() {
        tt();
    });

</script>