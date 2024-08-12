<div class="field-row" id="option-table-buttons">
    @stack('buttons')
</div>

<div>
    {{ $slot }}
</div>

<script>
    $('#option-table-buttons>button').on('click', function(){
        $aux = this.value;
        $('.modo').hide()
        $('.modo-' + $aux).fadeIn();
        Utils.ajustarColunas('.modo-' + $aux);
        
        $('#option-table-buttons>button').removeClass('blue');
        $('#option-table-buttons>button').addClass('white');
        $(this).removeClass('white')
        $(this).addClass('blue')
    })
</script>

<style>
    .modo {
        max-height: 300px;
        overflow: hidden auto;
    }
</style>
