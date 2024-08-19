<?php

namespace App\Helpers;

class ParametrosHelper
{
    public static $values = [
        'cnaes_emitente' => 'CNAE (Emitente)',
        'cnaes_destinatario' => 'CNAE (Destinatario)',
        'categorias_emitente' => 'Categorias (Emitente)',
        'categorias_destinatario' => 'Categorias (Destinatario',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$values[$valor] : 'NAO INFORMADO';
    }
}
