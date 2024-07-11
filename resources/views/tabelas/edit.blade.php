<x-form route="tabelas.update" params="{{ $tabela->id }}">
    @method('PATCH')
    @include('tabelas.fields')
</x-form>

<div id="coluna_clone" data-idx="_clone" class="coluna-div" style="display:none;">
    @include('tabelas.coluna', ['coluna' => null, 'i' => '_clone'])
</div>
