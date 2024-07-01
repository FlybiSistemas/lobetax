<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lbtaxfull extends Model
{
    public $table = 'lbtaxfulls';

    public $fillable = [
        'chave',
        'imposto',
        'chave_lei',
        'descricao',
        'tipo_campo',
        'chave_campo',
        'descricao_chave_campo',
        'info'
    ];

    protected $casts = [
        'chave' => 'string',
        'imposto' => 'string',
        'chave_lei' => 'string',
        'descricao' => 'string',
        'tipo_campo' => 'string',
        'chave_campo' => 'string',
        'descricao_chave_campo' => 'string',
        'info' => 'string'
    ];

    public static array $rules = [
        
    ];

    
}
