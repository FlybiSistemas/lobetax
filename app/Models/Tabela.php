<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tabela extends Model
{
    public $table = 'tabelas';

    public $fillable = [
        'nome'
    ];

    protected $casts = [
        'nome' => 'string'
    ];

    public static array $rules = [
        
    ];

    
}
