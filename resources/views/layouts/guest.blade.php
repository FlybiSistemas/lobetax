<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'LobeTax') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap" rel="stylesheet">

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
    </head>
    <body id="body-login" style="background: #201B51;">

		<div class="limiter">
			<div class="container-login100">
				<div class="wrap-login100">
					<div class="login100-more" style="background-image: url('{{ asset('img/logomarca.svg') }}');">
						<img class="logo" src="{{ asset('img/logo-branca.png') }}" alt="">
					</div>

                    {{ $slot }}
				</div>
			</div>
		</div>
	</body>
</html>
