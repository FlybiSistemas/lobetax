<table class="table-list">
    <thead>
        <tr class="titulos">
            <th>Uf <img class="icon-grey filter-icon filter_uf" src="{{ isset($searchData['filter_uf']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
            <th>Imposto <img class="icon-grey filter-icon filter_imposto" src="{{ isset($searchData['filter_imposto']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
            <th>Ordem <img class="icon-grey filter-icon filter_ordem" src="{{ isset($searchData['filter_ordem']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
            <th>Legislacao <img class="icon-grey filter-icon filter_legislacao" src="{{ isset($searchData['filter_legislacao']) ? asset('img/new/icons/remove-filter.ico') : '' }}" alt=""></th>
            <th width="100">Ações<img class="filter-icon" src="" alt=""></th>
        </tr>
        <tr>
            <th><input class="form-control" name="filter_uf" type="text" style="display:none;" value="{{ isset($searchData['filter_uf']) ? $searchData['filter_uf'] : '' }}"></th>
            <th><input class="form-control" name="filter_imposto" type="text" style="display:none;" value="{{ isset($searchData['filter_imposto']) ? $searchData['filter_imposto'] : '' }}"></th>
            <th><input class="form-control" name="filter_ordem" type="text" style="display:none;" value="{{ isset($searchData['filter_ordem']) ? $searchData['filter_ordem'] : '' }}"></th>
            <th><input class="form-control" name="filter_legislacao" type="text" style="display:none;" value="{{ isset($searchData['filter_legislacao']) ? $searchData['filter_legislacao'] : '' }}"></th>
            <th><img class="filter-icon" src="" alt=""></th>
        </tr>
    </thead>
    <tbody id="lbtaxuf-list">
        @foreach($lbtaxufs as $lbtaxuf)
            <tr id="row_{{ $lbtaxuf->id }}">
                <td>{{ $lbtaxuf->uf }}</td>
                <td>{{ App\Helpers\ImpostoHelper::get($lbtaxuf->imposto) }}</td>
                <td>{{ $lbtaxuf->ordem }}</td>
                <td>{{ $lbtaxuf->legislacao }}</td>
                <td class="actions">
                    <div onclick="Tela.abrirJanela('{{ route('lbtaxufs.edit', $lbtaxuf->id) }}', 'Visualizar', 'md')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/eye.ico') }}">
                    </div>
                    <div onclick="Tela.abrirJanelaExcluir('{{ route('lbtaxufs.destroy', [$lbtaxuf->id]) }}?_token={{ csrf_token() }}', '{{ $lbtaxuf->id }}')">
                        <img class="acoes-img" src="{{ asset('img/new/icons/trash.ico') }}">
                    </div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
<div class="card-footer clearfix">
    <div class="float-right">
        @include('layouts.pagination', [
            'paginator' => $lbtaxufs,
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
        $('#formSearch').on('submit', function() {
            if($('#filter_imposto2').val() != '' && $('#filter_uf2').val() != ''){
                setTimeout(function(){
                    $('#lbtaxuf-list').sortable({
                        update: function(event, ui) {
                            var ordem = $(this).sortable('toArray');
                            console.log(ordem);
                            reorderRules(ordem);
                        }
                    });
                },500)
            }
        })
    });

    function reorderRules(ordem) {
        $.ajax({
            url: '{{ route('lbtaxufs.reorder') }}',
            type: 'POST',
            data: {
                _token: $('meta[name="csrf-token"]').attr('content'),
                ordem: ordem
            },
            success: function(response) {
                Tela.avisoComSucesso('Ordem atualizada com sucesso!');
                $('#formSearch').submit();
            },
            error: function(response) {
                Tela.avisoComErro('Erro ao atualizar ordem!');
            }
        });
    }
</script>
