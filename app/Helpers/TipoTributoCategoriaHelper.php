<?php

namespace App\Helpers;

class TipoTributoCategoriaHelper
{
    public static $tipos = [
        'G' => 'GERAL',
        'F' => 'FEDERAL',
        'E' => 'ESTADUAL',
        'M' => 'MUNICIPAL'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : 'NAO INFORMADO';
    }
}
