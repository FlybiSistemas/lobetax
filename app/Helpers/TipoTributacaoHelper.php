<?php

namespace App\Helpers;

class TipoTributacaoHelper
{
    public static $tipos = [
        'T' => 'TRIBUTADO',
        'M' => 'MONOFASICO',
        'I' => 'ISENTO',
        'Z' => 'ALIQUOTA ZERO',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : 'NAO INFORMADO';
    }
}
