<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Referencia extends Model
{
    use HasFactory;
    protected $fillable = ['referencia'];

    public function colunas(): BelongsToMany
    {
        return $this->belongsToMany(Coluna::class, 'coluna_referencias', 'coluna_id', 'referencia_id');
    }
}
