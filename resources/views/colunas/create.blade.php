<x-form route="colunas.store">
    @include('colunas.fields', ['coluna' => null])
</x-form>

<div id="referencia_clone" data-idx="_clone" class="referencia-div" style="display:none;">
    @include('colunas.referencia', ['referencia' => null, 'i' => '_clone'])
</div>