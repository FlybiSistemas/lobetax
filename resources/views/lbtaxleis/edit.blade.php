<x-form route="lbtaxleis.update" params="{{$lbtaxlei->id}}">
    @method('PATCH')
    @include('lbtaxleis.fields')
</x-form>

<script>
    $(document).ready(function() {
        debugger;
        var chave = $('#chave').val();
        var chks = $('.chk');

        for(let i = 0; i < chave.length; i++) {
            if(chave[i] == 'S') {
                chks[i].checked = true;
            }
        }
    });
</script>