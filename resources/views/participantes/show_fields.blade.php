<!-- Cnpj Field -->
<div class="col-sm-12">
    {!! Form::label('cnpj', 'Cnpj:') !!}
    <p>{{ $participantes->cnpj }}</p>
</div>

<!-- Razao Social Field -->
<div class="col-sm-12">
    {!! Form::label('razao_social', 'Razao Social:') !!}
    <p>{{ $participantes->razao_social }}</p>
</div>

<!-- Natureza Field -->
<div class="col-sm-12">
    {!! Form::label('natureza', 'Natureza:') !!}
    <p>{{ $participantes->natureza }}</p>
</div>

<!-- Categoria Field -->
<div class="col-sm-12">
    {!! Form::label('categoria', 'Categoria:') !!}
    <p>{{ $participantes->categoria }}</p>
</div>

<!-- Created At Field -->
<div class="col-sm-12">
    {!! Form::label('created_at', 'Created At:') !!}
    <p>{{ $participantes->created_at }}</p>
</div>

<!-- Updated At Field -->
<div class="col-sm-12">
    {!! Form::label('updated_at', 'Updated At:') !!}
    <p>{{ $participantes->updated_at }}</p>
</div>

