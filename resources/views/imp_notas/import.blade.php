<form action="{{ route('impNotas.store') }}" id="form" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <div class="col-sm-12">
            <h4>Máximo de 50 arquivos por vez.</h4>
        </div>
    </div>
    <div class="form-group col-sm-12 required">
        <label for="arquivos_xml">Arquivos XML:</label>
        <input type="file" name="arquivos[]" id="arquivos_xml" class="form-control" multiple />
    </div>
    <div id="footerModal" class="d-flex justify-content-end mt-4">
        <div>
            <button type="submit" class="button blue">
                <span>IMPORTAR</span>
            </button>
            <button type="button" class="button white" data-bs-dismiss="modal">
                <span>CANCELAR</span>
            </button>
        </div>
    </div>
</form>

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
