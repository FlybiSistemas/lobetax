<?php

namespace App\Helpers;

class TipoCampoHelper
{
    public static $tipos = [
        'N' => 'NUMERO',
        'T' => 'TEXTO'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : 'TEXTO';
    }
}
