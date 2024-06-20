<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ImpNota extends Model
{
    public $table = 'imp_notas';

    protected $dates = ['deleted_at', 'data_hora_emissao'];

    public $fillable = [
        'nItem',
        'arquivo',
        'xml',
        'aprovada',
    ];

    protected $casts = [
        'nItem' => 'string',
        'arquivo' => 'string',
        'aprovada' => 'string'
    ];

    /**
     * @return string:null
     */
    public function getChaveAttribute(): string|null
    {
        if (!$this->arquivo) {
            return null;
        }
        return substr($this->arquivo, 0, strlen($this->arquivo) - 4);
    }
}
