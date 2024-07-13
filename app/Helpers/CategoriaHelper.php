<?php

namespace App\Helpers;

class CategoriaHelper
{
    public static $values = [
        '' => '--',
        'C' => 'COMERCIO',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$values[$valor] : '--';
    }
}
