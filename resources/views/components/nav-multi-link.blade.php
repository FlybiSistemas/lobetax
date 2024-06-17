@props(['route', 'icon', 'text'])

@if($route != '#' && Request::is($route.'*'))
    @php $active = true; @endphp
@else
    @php $active = false; @endphp
@endif

<div>
    <a class="item {{ $active ? 'active' : '' }}">
        <div class="icon">
            <img class="file-text {{ $active ?? 'icon-white' }}" src="{{ asset('img/new/icons/'.$icon.'.ico') }}" />
        </div>
        <div class="item-text">
            {{ $text }}
        </div>
    </a>
    <ul style="{{ $active ? 'display: block;' : 'display: none;' }}">
        {{ $slot }}
    </ul>
</div>

