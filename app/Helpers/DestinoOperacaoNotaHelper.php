<?php

namespace App\Helpers;

class DestinoOperacaoNotaHelper
{
    public static $destinos = [
        '1' => 'INTERNA',
        '2' => 'INTERESTADUAL',
        '3' => 'EXTERIOR'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$destinos[$valor] : '';
    }
}
