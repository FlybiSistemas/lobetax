<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Lbtax extends Model
{
    public $table = 'lbtaxs';

    public $fillable = [
        'iafis',
        'aplica',
        'icms',
        'icmsst'
    ];

    protected $casts = [
        'iafis' => 'string',
        'aplica' => 'integer',
        'icms' => 'string',
        'icmsst' => 'string'
    ];

    public static array $rules = [
        
    ];

    
}
