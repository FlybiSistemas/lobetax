<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lbtaxlei extends Model
{
    public $table = 'lbtaxleis';

    public $fillable = [
        'imposto',
        'cod',
        'bsl',
        'chave',
        'uf'
    ];

    protected $casts = [
        'imposto' => 'string',
        'cod' => 'string',
        'bsl' => 'string',
        'chave' => 'string',
        'uf' => 'string'
    ];

    public static array $rules = [
        
    ];

    
}
