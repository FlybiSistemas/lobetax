<x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}" class="login">
        @csrf

        <div class="title">
            <h1>Bem-vindo de volta!</h1>
            <p>Informe o e-mail e senha cadastrado para acessar.</p>
        </div>

        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
        </div>

        <div>
            <x-input-label for="password" :value="__('Senha')" />
            <x-text-input id="password"
                type="password"
                name="password"
                required autocomplete="current-password" />
        </div>

        <button>Entrar</button>

        @if (Route::has('password.request'))
            <div class="frame-1">
                <span class="esqueceu-asenha">
                    Esqueceu a senha?
                </span>
                <span class="recupere-aqui">
                    Recupere aqui
                </span>
            </div>
        @endif
    </form>
</x-guest-layout>
