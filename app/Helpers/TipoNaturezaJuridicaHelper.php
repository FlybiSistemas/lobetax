<?php

namespace App\Helpers;

class TipoNaturezaJuridicaHelper
{
    public static $tipos = [
        'U' => 'PUBLICO',
        'R' => 'PRIVADO'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : '--';
    }
}
