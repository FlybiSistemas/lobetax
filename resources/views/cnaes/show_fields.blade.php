<!-- Codigo Field -->
<div class="col-sm-12">
    {!! Form::label('codigo', 'Codigo:') !!}
    <p>{{ $cnae->codigo }}</p>
</div>

<!-- Descricao Field -->
<div class="col-sm-12">
    {!! Form::label('descricao', 'Descricao:') !!}
    <p>{{ $cnae->descricao }}</p>
</div>

<!-- Atividade Field -->
<div class="col-sm-12">
    {!! Form::label('atividade', 'Atividade:') !!}
    <p>{{ $cnae->atividade }}</p>
</div>

<!-- Created At Field -->
<div class="col-sm-12">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $cnae->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="col-sm-12">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $cnae->updated_at }}</p>
</div>

