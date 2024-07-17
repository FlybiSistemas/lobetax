<!-- Codigo Field -->
<div class="col-sm-12">
    {!! Form::label('codigo', 'Codigo:') !!}
    <p>{{ $ncm->codigo }}</p>
</div>

<!-- Tipo Field -->
<div class="col-sm-12">
    {!! Form::label('tipo', 'Tipo:') !!}
    <p>{{ $ncm->tipo }}</p>
</div>

<!-- Created At Field -->
<div class="col-sm-12">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $ncm->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="col-sm-12">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $ncm->updated_at }}</p>
</div>

