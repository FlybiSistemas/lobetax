<?php

namespace App\Helpers;

class OrigemNotaHelper
{
    public static $origens = [
        'E' => 'ENTRADA',
        'S' => 'SAIDA'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$origens[$valor] : '';
    }
}
