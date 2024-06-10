<?php

namespace App\Helpers;

class DestinoProdutoHelper
{
    public static $destinos = [
        'C' => 'CONSUMO',
        'I' => 'IMOBILIZADO',
        'R' => 'REVENDA'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$destinos[$valor] : '';
    }
}
