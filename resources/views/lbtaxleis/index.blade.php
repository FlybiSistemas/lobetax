<x-app-layout>
    <x-slot name="header">
        <p class="breadcrumb">
            <span>Lobe</span>
            <span>/</span>
            <span>Lbtaxleis</span>
        </p>
        <span class="title">Lbtaxleis</span>
            </x-slot>

    <div style="padding: 10px 20px 0 10px;display: flex;flex-direction: column;">
        <div class="btn-import" style="display: flex;justify-content: space-between;">
            <div style="display: flex;">
                <div class="search-input input input-float" style="flex: .3;">
                    <select name="filter_imposto" id="filter_imposto2" class="form-control">
                        <option value="">Imposto</option>
                        @foreach(\App\Helpers\ImpostoHelper::$impostos as $key => $value)
                        <option value="{{ $value }}">{{ $value }}</option>
                        @endforeach
                    </select>
                </div>
                
                <div class="search-input input input-float" style="flex: .3;">
                    <select name="filter_uf" id="filter_uf2" class="form-control">
                        <option value="">UF</option>
                        @foreach(\App\Helpers\UfsHelper::$ufs as $key => $value)
                            <option value="{{ $key }}">{{ $value }}</option>
                        @endforeach
                    </select>
                </div>
            </div>

            <div class="button blue">
                <span onclick="Tela.abrirJanela('{{ route('lbtaxleis.create') }}', 'Nova Lei', 'md')">NOVA LEI</span>
            </div>
        </div>

        <div id="divList">
            
        </div>
        <script>
            $(function() {
                $('#formSearch').attr('action', '{{ route('lbtaxleis.search') }}');
                $('#filter_search').attr('name', 'filter_nome');
                Filtro.inicializaFormBusca("#formSearch", "#divList", true);
            });



            const handleEvent = (el) => {
                const target = $(el.target);
                const name = target.attr('name');
                const value = target.val();

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
            };

            document.getElementById('filter_uf2').addEventListener('change', handleEvent);
            document.getElementById('filter_imposto2').addEventListener('change', handleEvent);

        </script>
    </div>

</x-app-layout>
