<?php

namespace App\Helpers;

class ImpostoHelper
{
    public static $impostos = [
        'I' => 'ICMS',
        'IS' => 'ICMSST',
        'P' => 'PIS',
        'C' => 'COFINS',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$impostos[$valor] : '';
    }

    public static function getKey($valor)
    {
        // retornar a key do valor
        return isset($valor) ? array_search(strtoupper($valor), self::$impostos) : '';
    }
}
