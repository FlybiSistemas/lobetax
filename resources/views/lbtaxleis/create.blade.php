<x-form route="lbtaxleis.store">
    @include('lbtaxleis.fields')
</x-form>

<script>
    $('#form').on('submit', function(e) {
        e.preventDefault();
        chaves = $('.chk')
            .map(function() {
                if(this.checked)
                    return 'S';
                else
                    return 'N';
            })
            .get();
        $('#chave').val(chaves.join(''));
    });
</script>
