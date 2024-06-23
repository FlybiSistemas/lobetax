<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lbtaxuf extends Model
{
    public $table = 'lbtaxufs';

    public $fillable = [
        'uf',
        'imposto',
        'ordem',
        'legislacao'
    ];

    protected $casts = [
        'imposto' => 'string',
        'ordem' => 'string',
        'legislacao' => 'string'
    ];

    public static array $rules = [
        
    ];

    
}
