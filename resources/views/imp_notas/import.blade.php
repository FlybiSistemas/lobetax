<x-form route="impNotas.store" enctype="multipart/form-data">
    <div class="row">
        <div class="col-sm-12">
            <h4>Máximo de 50 arquivos por vez.</h4>
        </div>
    </div>
    <div class="form-group col-sm-12 required">
        <label for="arquivos_xml">Arquivos XML:</label>
        <input type="file" name="arquivos[]" id="arquivos_xml" class="form-control" multiple />
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
