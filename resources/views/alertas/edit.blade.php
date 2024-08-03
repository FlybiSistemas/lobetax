<x-form route="alertas.update" params="{{$alerta->id}}">
    @method('PATCH')
    @include('alertas.fields')
</x-form>