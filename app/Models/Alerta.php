<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alerta extends Model
{
    public $table = 'alertas';

    public $fillable = [
        'model_name',
        'model_id',
        'descricao',
        'valor',
        'rota'
    ];

    protected $casts = [
        'model_name' => 'string',
        'model_id' => 'integer',
        'descricao' => 'string',
        'valor' => 'string',
        'rota' => 'string'
    ];

    public static array $rules = [
        
    ];

    
}
