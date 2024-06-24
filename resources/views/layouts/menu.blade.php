
<li class="nav-item">
    <a href="{{ route('tabelas.index') }}" class="nav-link {{ Request::is('tabelas*') ? 'active' : '' }}">
        <i class="nav-icon fas fa-home"></i>
        <p>Tabelas</p>
    </a>
</li>

<li class="nav-item">
    <a href="{{ route('lbtaxufs.index') }}" class="nav-link {{ Request::is('lbtaxufs*') ? 'active' : '' }}">
        <i class="nav-icon fas fa-home"></i>
        <p>Lbtaxufs</p>
    </a>
</li>

<li class="nav-item">
    <a href="{{ route('lbtaxleis.index') }}" class="nav-link {{ Request::is('lbtaxleis*') ? 'active' : '' }}">
        <i class="nav-icon fas fa-home"></i>
        <p>Lbtaxleis</p>
    </a>
</li>
