<x-form route="tabelas.update" params="{{ $tabela->id }}">
    @method('PATCH')
    @include('tabelas.fields')
</x-form>
