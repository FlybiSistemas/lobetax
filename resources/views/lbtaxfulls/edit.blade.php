<x-form route="lbtaxfulls.update" params="{{$lbtaxfull->id}}">
    @method('PATCH')
    @include('lbtaxfulls.fields')
</x-form>