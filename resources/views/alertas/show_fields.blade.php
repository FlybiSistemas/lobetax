<!-- Model Name Field -->
<div class="col-sm-12">
    {!! Form::label('model_name', 'Model Name:') !!}
    <p>{{ $alerta->model_name }}</p>
</div>

<!-- Model Id Field -->
<div class="col-sm-12">
    {!! Form::label('model_id', 'Model Id:') !!}
    <p>{{ $alerta->model_id }}</p>
</div>

<!-- Descricao Field -->
<div class="col-sm-12">
    {!! Form::label('descricao', 'Descricao:') !!}
    <p>{{ $alerta->descricao }}</p>
</div>

<!-- Valor Field -->
<div class="col-sm-12">
    {!! Form::label('valor', 'Valor:') !!}
    <p>{{ $alerta->valor }}</p>
</div>

<!-- Rota Field -->
<div class="col-sm-12">
    {!! Form::label('rota', 'Rota:') !!}
    <p>{{ $alerta->rota }}</p>
</div>

<!-- Created At Field -->
<div class="col-sm-12">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $alerta->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="col-sm-12">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $alerta->updated_at }}</p>
</div>

