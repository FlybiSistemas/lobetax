<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ncm extends Model
{
    public $table = 'ncms';

    public $fillable = [
        'codigo',
        'tipo'
    ];

    protected $casts = [
        'codigo' => 'string',
        'tipo' => 'string'
    ];

    public static array $rules = [
        
    ];

    
}
