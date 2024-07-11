<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Tabela extends Model
{
    public $table = 'tabelas';

    public $fillable = [
        'nome'
    ];

    protected $casts = [
        'nome' => 'string'
    ];

    public function colunas():BelongsToMany
    {
        return $this->belongsToMany(Coluna::class)->withPivot('ordem');
    }

    
}
