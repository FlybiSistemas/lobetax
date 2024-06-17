<x-form route="colunas.store">
    <div class="field-row">
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="nome">Nome</label>
            <input type="text" name="nome" id="nome" class="form-control">
        </div>
        <div class="search-input input input-float" style="flex: 1;">
            <label class="label-float" for="referencia">Referência</label>
            <input type="text" name="referencia" id="referencia" class="form-control">
        </div>
    </div>
</x-form>
<script>
    $(function() {
        $("#form").submit(function(e) {
            var $fileUpload = $("input[type='file']");
            // TODO: Deixar a quantidade de arquivos em configurações.
            if (parseInt($fileUpload.get(0).files.length) > 500) {
                Tela.avisoComErro("Você não pode enviar mais que 50 arquivos por vez.");
                return false;
            }

            Ajax.salvarRegistroComArquivo($(this));
            e.preventDefault();
        });
    });
</script>
