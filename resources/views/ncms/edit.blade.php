<x-form route="ncms.update" params="{{$ncm->id}}">
    @method('PATCH')
    @include('ncms.fields')
</x-form>