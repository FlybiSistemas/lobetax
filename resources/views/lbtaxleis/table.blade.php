<div style="overflow-x: unset;">
    <table class="table-list">
        <thead>
            <tr class="titulos" style="display: contents;">
                <th>Imposto <img class="icon-grey filter-icon filter_imposto" src="{{ isset($searchData['filter_imposto']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th>Cod <img class="icon-grey filter-icon filter_cod" src="{{ isset($searchData['filter_cod']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th>Bsl <img class="icon-grey filter-icon filter_bsl" src="{{ isset($searchData['filter_bsl']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th>Chave <img class="icon-grey filter-icon filter_chave" src="{{ isset($searchData['filter_chave']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
                <th width="100">Ações<img class="filter-icon" src="" alt=""></th>
            </tr>
            <tr>
                <th><input class="form-control" name="filter_imposto" type="text" style="display:none;" value="{{ isset($searchData['filter_imposto']) ? $searchData['filter_imposto'] : '' }}"></th>
                <th><input class="form-control" name="filter_cod" type="text" style="display:none;" value="{{ isset($searchData['filter_cod']) ? $searchData['filter_cod'] : '' }}"></th>
                <th><input class="form-control" name="filter_bsl" type="text" style="display:none;" value="{{ isset($searchData['filter_bsl']) ? $searchData['filter_bsl'] : '' }}"></th>
                <th><input class="form-control" name="filter_chave" type="text" style="display:none;" value="{{ isset($searchData['filter_chave']) ? $searchData['filter_chave'] : '' }}"></th>
                <th></th>
            </tr>
        </thead>
        <tbody style="display: block;">
            @foreach($lbtaxleis as $lbtaxlei)
                <tr id="row_{{ $lbtaxlei->id }}">
                    <td>{{ App\Helpers\ImpostoHelper::get($lbtaxlei->imposto) }}</td>
                    <td>{{ $lbtaxlei->cod }}</td>
                    <td>{{ $lbtaxlei->bsl }}</td>
                    <td>{{ $lbtaxlei->chave }}</td>
                    <td class="actions">
                        <div onclick="Tela.abrirJanela('{{ route('lbtaxleis.edit', $lbtaxlei->id) }}', 'Visualizar', 'md')">
                            <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                        </div>
                        <div onclick="Tela.abrirJanelaExcluir('{{ route('lbtaxleis.destroy', [$lbtaxlei->id]) }}?_token={{ csrf_token() }}', '{{ $lbtaxlei->id }}')">
                            <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                        </div>
                        <div class="border-b"></div>
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
<div class="card-footer clearfix">
    <div class="float-right">
        @include('layouts.pagination', [
            'paginator' => $lbtaxleis,
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
            // const handleEvent = (el) => {
            //     const target = $(el.target);
            //     const name = target.attr('name');
            //     const value = target.val();
            //     if(value.length > 1){
            //         let existingInput = $(`#formSearch input[name="${name}"]`);
                    
            //         if (existingInput.length > 0) {
            //             existingInput.val(value);
            //         } else {
            //             const newInput = $('<input>', {
            //                 type: 'hidden',
            //                 name: name,
            //                 value: value
            //             });
            //             $('#formSearch').append(newInput);
            //         }
    
            //         // Atualiza o ícone de filtro para "remove"
            //         // let th = Array.from(thElements).find((th) => {
            //         //     return $(th).find(`img.icon-grey.filter-icon.${name}`).length > 0;
            //         // });
                    
            //         // if (th) {
            //         //     let filterIcon = th.querySelector('.filter-icon');
            //         //     filterIcon.src = filterIcon.src.replace('filter', 'remove-filter')
            //         // }
    
            //         $('#formSearch').submit();
            //     }
            // };

            inputEl.addEventListener('blur', handleEvent);
        });
    }
    $(document).ready(function() {
        tt();
    });
</script>
