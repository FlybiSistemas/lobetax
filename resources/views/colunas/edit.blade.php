<x-form route="colunas.update" params="{{ $coluna->id }}">
    @method('PATCH')
    @include('colunas.fields')
</x-form>

<div id="referencia_clone" data-idx="_clone" class="referencia-div" style="display:none;">
    <table>
        <tbody>
            @include('colunas.referencia', ['referencia' => null, 'i' => '_clone'])
        </tbody>
    </table>
</div>