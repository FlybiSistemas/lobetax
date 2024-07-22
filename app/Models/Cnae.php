<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cnae extends Model
{
    public $table = 'cnaes';

    public $fillable = [
        'codigo',
        'descricao',
        'categoria'
    ];

    protected $casts = [
        'codigo' => 'string',
        'descricao' => 'string',
        'categoria' => 'string'
    ];

    public static array $rules = [
        
    ];

    
}
