<form action="{{route('impNotas.store') }}" id="form" method="post" enctype="multipart/form-data">
    @csrf
    <div class="row">
        <div class="col-sm-12">
            <h4>Máximo de 50 arquivos por vez.</h4>
        </div>
    </div>
    <div class="row">
        <div class="form-group col-sm-12 required">
            <label for="arquivos_xml">Arquivos XML:</label>
            <input type="file" name="arquivos[]" id="arquivos_xml" class="form-control" multiple />
        </div>
        <div id="footerModal" class="form-group col-sm-12 d-flex justify-content-end mt-4">
            <div>
                <button type="submit" class="button blue">
                    <span>IMPORTAR</span>
                </button>
                <button type="button" class="button white" data-bs-dismiss="modal">
                    <span>CANCELAR</span>
                </button>
            </div>
        </div>
    </div>
</form>
<script>
    $(function() {
        $('.select2-padrao').select2({
            dropdownParent: "#modalBasic"
        });

        $('#data_inicio').val(moment().format('YYYY-MM-DD'));
        $('#data_fim').val(moment().format('YYYY-MM-DD'));

        $("#form").submit(function(e) {
            Ajax.salvarRegistro($(this));
            e.preventDefault();
        });
    });
</script>
