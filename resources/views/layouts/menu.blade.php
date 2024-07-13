
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

<li class="nav-item">
    <a href="{{ route('lbtaxs.index') }}" class="nav-link {{ Request::is('lbtaxs*') ? 'active' : '' }}">
        <i class="nav-icon fas fa-home"></i>
        <p>Lbtaxs</p>
    </a>
</li>

<li class="nav-item">
    <a href="{{ route('lbtaxfulls.index') }}" class="nav-link {{ Request::is('lbtaxfulls*') ? 'active' : '' }}">
        <i class="nav-icon fas fa-home"></i>
        <p>Lbtaxfulls</p>
    </a>
</li>

<li class="nav-item">
    <a href="{{ route('participantes.index') }}" class="nav-link {{ Request::is('participantes*') ? 'active' : '' }}">
        <i class="nav-icon fas fa-home"></i>
        <p>Participantes</p>
    </a>
</li>
