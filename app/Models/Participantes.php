<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Participantes extends Model
{
    public $table = 'participantes';

    public $fillable = [
        'cnpj',
        'razao_social',
        'natureza',
    ];

    protected $casts = [
        'cnpj' => 'string',
        'razao_social' => 'string',
        'natureza' => 'string',
    ];

    public static array $rules = [
        
    ];

    public function cnaes():BelongsToMany
    {
        return $this->belongsToMany(Cnae::class);
    }

    public function categorias():BelongsToMany
    {
        return $this->belongsToMany(Categoria::class);
    }
    
}
