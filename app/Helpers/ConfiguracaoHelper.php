<?php

namespace App\Helpers;

class ConfiguracaoHelper
{
    public static $values = [
        'A' => 'ANTECIPADO',
        'D' => 'DESTACADO',
        'S' => 'SUBSTITUIDO',
        'N' => 'NAO INCIDÊNCIA',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$values[$valor] : 'NAO INFORMADO';
    }
}
