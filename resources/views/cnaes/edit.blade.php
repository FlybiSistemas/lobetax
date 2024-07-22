<x-form route="cnaes.update" params="{{$cnae->id}}">
    @method('PATCH')
    @include('cnaes.fields')
</x-form>