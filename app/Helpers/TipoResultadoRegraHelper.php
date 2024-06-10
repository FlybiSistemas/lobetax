<?php

namespace App\Helpers;

class TipoResultadoRegraHelper
{
    public static $tipos = [
        'V' => 'VALOR',
        'R' => 'REGRA'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : 'V';
    }
}
