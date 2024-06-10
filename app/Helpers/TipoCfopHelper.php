<?php

namespace App\Helpers;

class TipoCfopHelper
{
    public static $tipos = [
        'R' => 'REVENDA',
        'C' => 'CONSUMO',
        'I' => 'IMOBILIZADO'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : '--';
    }
}
