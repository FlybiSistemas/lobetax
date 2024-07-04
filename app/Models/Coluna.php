<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Coluna extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'referencia', 'coluna_id', 'referencia_campo'];

    public function referencias(): BelongsToMany
    {
        return $this->belongsToMany(Referencia::class, 'coluna_referencias', 'coluna_id', 'referencia_id');
    }
}
