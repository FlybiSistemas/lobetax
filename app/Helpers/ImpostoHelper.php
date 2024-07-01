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
}
