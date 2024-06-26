<?php

namespace App\Helpers;

class TipoTributacaoHelper
{
    public static $tipos = [
        'T' => 'TRIBUTADO',
        'R' => 'REDUÇÃO',
        'I' => 'ISENTO',
        'S' => 'SUBSTITUIDO',
        'N' => 'NAO INCIDÊNCIA',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : 'NAO INFORMADO';
    }
}
