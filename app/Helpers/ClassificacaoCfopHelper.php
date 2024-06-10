<?php

namespace App\Helpers;

class ClassificacaoCfopHelper
{
    public static $classificacoes = [
        'I' => 'INDUSTRIA',
        'C' => 'COMERCIO',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$classificacoes[$valor] : '';
    }
}
