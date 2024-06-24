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
        'chave'
    ];

    protected $casts = [
        'imposto' => 'string',
        'cod' => 'string',
        'bsl' => 'string',
        'chave' => 'string'
    ];

    public static array $rules = [
        
    ];

    
}
