<x-form route="colunas.update" params="{{ $coluna->id }}">
    @method('PATCH')
    @include('colunas.fields')
</x-form>
