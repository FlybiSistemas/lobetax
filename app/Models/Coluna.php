<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Coluna extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'referencia',
        'referencia_campo',
        
        'coluna_id',
        'tipo_coluna',

        'coluna_id2',
        'model_name',
        'buscar_name',
        'subrelacao_name',
        'verdadeiro',
        'falso',
    ];

    public function referencias(): BelongsToMany
    {
        return $this->belongsToMany(Referencia::class, 'coluna_referencias', 'coluna_id', 'referencia_id');
    }

    public function coluna(): BelongsTo
    {
        return $this->belongsTo(Coluna::class, 'coluna_id');
    }

    public function coluna2(): BelongsTo
    {
        return $this->belongsTo(Coluna::class, 'coluna_id2');
    }
}
