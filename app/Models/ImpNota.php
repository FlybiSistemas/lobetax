<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ImpNota extends Model
{
    public $table = 'imp_notas';

    protected $dates = ['deleted_at', 'data_hora_emissao'];

    public $fillable = [
        'arquivo',
        'xml',
        'ide_cuf',
        'ide_cnf',
        'ide_iddest',
        'ide_mod',
        'ide_finnfe',
        'ide_natop',
        'emit_cnpj',
        'emit_xnome',
        'emit_xlgr',
        'emit_nro',
        'emit_xbairro',
        'emit_cmun',
        'emit_xmun',
        'emit_uf',
        'emit_cep',
        'emit_cpais',
        'emit_xpais',
        'emit_ie',
        'emit_crt',
        'dest_cnpj',
        'dest_xnome',
        'dest_xlgr',
        'dest_nro',
        'dest_xbairro',
        'dest_cmun',
        'dest_xmun',
        'dest_uf',
        'dest_cep',
        'dest_cpais',
        'dest_xpais',
        'dest_ie',
        'qtde_itens',
        'total',
        'inf_adic',
        'data_hora_emissao',
        'aprovada',
        'vfrete'
    ];

    protected $casts = [
        'arquivo' => 'string',
        'ide_cuf' => 'integer',
        'ide_cnf' => 'integer',
        'ide_iddest' => 'integer',
        'ide_mod' => 'integer',
        'ide_finnfe' => 'integer',
        'ide_natop' => 'string',
        'emit_xnome' => 'string',
        'dest_xnome' => 'string',
        'qtde_itens' => 'integer',
        'total' => 'decimal:2',
        'vfrete' => 'decimal:2',
        'inf_adic' => 'string',
        'aprovada' => 'string'
    ];

    /**
     * @return HasMany
     */
    protected function itens(): HasMany
    {
        return $this->hasMany(ImpNotaItem::class);
    }

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
