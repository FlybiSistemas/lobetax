<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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

    public function cnaes():BelongsToMany
    {
        return $this->belongsToMany(Cnae::class);
    }

    
}
