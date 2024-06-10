<?php

namespace App\Helpers;

class TipoCalculoHelper
{
    public static $tipos = [
        'B' => 'BASE DE CALCULO',
        'A' => 'ALIQUOTA',
        'V' => 'VALOR'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : 'NAO INFORMADO';
    }
}
