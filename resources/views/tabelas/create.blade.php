<form href="http://lobetax.local/rotinas/tabelas" id="form" method="post">
    @csrf
    @include('tabelas.fields')

    <div id="footerModal" class="d-flex justify-content-end mt-4">
        <div>
            <button type="submit" class="button blue">
                <span>SALVAR</span>
            </button>
            <button type="button" class="button white" data-bs-dismiss="modal">
                <span>CANCELAR</span>
            </button>
        </div>
    </div>
</form>

<div id="coluna_clone" data-idx="_clone" class="coluna-div" style="display:none;">
    @include('tabelas.coluna', ['coluna' => null, 'i' => '_clone'])
</div>

<script>
    $(function() {
        $("#form").submit(function(e) {
            Ajax.salvarRegistro($(this));
            e.preventDefault();
        });
    });
</script>
