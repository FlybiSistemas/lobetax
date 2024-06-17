@props(['route', 'submit'])
@php
    $submit = $submit ?? 'SALVAR';
@endphp

<form href="{{ $route != '#' ? route($route) : '#' }}" id="form" method="post">
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
