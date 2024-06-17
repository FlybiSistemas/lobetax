<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Coluna extends Model
{
    use HasFactory;

    protected $fillable = ['nome', 'referencia', 'coluna_id'];

    public function coluna(): BelongsTo
    {
        return $this->belongsTo(Coluna::class);
    }
}
