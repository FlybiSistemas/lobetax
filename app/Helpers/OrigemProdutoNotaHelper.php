<?php

namespace App\Helpers;

class OrigemProdutoNotaHelper
{
    public static $origens = [
        '0' => 'NACIONAL',
        '1' => 'ESTRANGEIRA',
        '2' => 'ESTRANGEIRA',
        '3' => 'NACIONAL',
        '4' => 'NACIONAL',
        '5' => 'NACIONAL',
        '6' => 'ESTRANGEIRA',
        '7' => 'ESTRANGEIRA',
        '8' => 'NACIONAL',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$origens[$valor] : '';
    }
}
