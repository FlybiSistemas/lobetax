<x-form route="lbtaxs.update" params="{{$lbtax->id}}">
    @method('PATCH')
    @include('lbtaxs.fields')
</x-form>