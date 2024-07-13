<x-form route="participantes.update" params="{{$participante->id}}">
    @method('PATCH')
    @include('participantes.fields')
</x-form>