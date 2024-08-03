<?php

namespace App\Helpers;

class TipoColunaHelper
{
    public static $tipos = [
        'r' => 'Referência',
        'b' => 'Busca',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : 'TEXTO';
    }
}
