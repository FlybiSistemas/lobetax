@props(['route', 'submit', 'params'])
@php
    $submit = $submit ?? 'SALVAR';
    $params = $params ?? '';
@endphp

@if($params == '')
    <form action="{{ $route != '#' ? route($route) : '#' }}" id="form">
@else
    <form action="{{ $route != '#' ? route($route, $params) : '#' }}" id="form">
@endif
    @csrf
    {{ $slot }}

    <div id="footerModal" class="d-flex justify-content-end mt-4">
        <div>
            <button type="submit" class="button blue">
                <span>{{ $submit }}</span>
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
            Ajax.salvarRegistro($(this));
            e.preventDefault();
        });
    });
</script>
