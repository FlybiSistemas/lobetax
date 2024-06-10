<?php

namespace App\Helpers;

class TipoEventoHelper
{
    public static $tipos = [
        '110110' => 'Correção',
        '110111' => 'Cancelamento'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : 'NAO INFORMADO';
    }
}
