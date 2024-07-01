@props(['route', 'icon'])

@if($route != '#' && Route::currentRouteNamed($route))
    @php $classes = 'item active'; $iconClasses = 'icon-white'; @endphp
@else
    @php $classes = 'item' @endphp
@endif

<a {{ $attributes->merge(['class' => $classes]) }} href="{{ $route != '#' ? route($route) : '#' }}">
    <div class="icon">
        <img class="file-text @isset($iconClasses) {{ $iconClasses }} @endisset" src="{{ asset('img/new/icons/'.$icon.'.ico') }}" />
    </div>
    <div class="item-text">
        {{ $slot }}
    </div>
</a>
