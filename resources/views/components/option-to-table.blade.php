<!-- resources/views/components/option-to-table.blade.php -->
@props(['name', 'buttonClass'])

@push('buttons')
    <button type="button" class="option-table @isset($buttonClass) {{ $buttonClass }} @else white @endisset" value="{{ $name }}">
        <span>{{ strtoupper($name) }}</span>
    </button>
@endpush

<div class="pt-2 mt-3 modo modo-{{ $name }}" style="@if(!isset($buttonClass)) display: none !important; @endif">
    {{ $slot }}
</div>
