<x-form route="ncms.store">
    @include('ncms.fields')
</x-form>

<div id="cnae_clone" data-idx="_clone" class="cnae-div" style="display:none;">
    @include('ncms.cnae', ['cnae' => null, 'i' => '_clone'])
</div>
