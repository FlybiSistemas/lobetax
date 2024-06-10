<?php

namespace App\Helpers;

class TipoOperacaoNotaHelper
{
    public static $tipos = [
        'E' => 'ENTRADA',
        'S' => 'SAIDA'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : '--';
    }
}
