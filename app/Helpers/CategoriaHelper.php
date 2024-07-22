<?php

namespace App\Helpers;

class CategoriaHelper
{
    public static $values = [
        'C' => 'COMERCIO',
        'I' => 'INDUSTRIA',
        'M' => 'IMOVEIS',
        'S' => 'SERVIÇOS',
        'T' => 'TRANSPORTE'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$values[$valor] : 'NAO INFORMADO';
    }
}
