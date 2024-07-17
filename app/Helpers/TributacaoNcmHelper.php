<?php

namespace App\Helpers;

class TributacaoNcmHelper
{
    public static $values = [
        'T' => 'TRIBUTADO',
        'M' => 'MONOFÁSICO',
        'A' => 'ALIQUOTA ZERO',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$values[$valor] : 'NAO INFORMADO';
    }
}
