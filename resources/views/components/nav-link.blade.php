@props(['route', 'icon'])

@if(Request::is($route.'*'))
    @php $classes = 'item active' @endphp
@else
    @php $classes = 'item' @endphp
@endif

<a {{ $attributes->merge(['class' => $classes]) }} href="{{ route($route) }}">
    <div class="icon">
        <img class="file-text" src="{{ asset('img/new/icons/'.$icon.'.ico') }}" />
    </div>
    <div class="item-text">
        {{ $slot }}
    </div>
</a>
