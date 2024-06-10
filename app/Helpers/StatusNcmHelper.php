<?php

namespace App\Helpers;

class StatusNcmHelper
{
    public static $status = [
        'A' => 'Ativo',
        'C' => 'Cancelado'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$status[$valor] : 'NAO INFORMADO';
    }
}
