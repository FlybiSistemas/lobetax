<?php

namespace App\Helpers;

class AnexoSimplesHelper
{
    public static $anexos = [
        '1' => 'Anexo I',
        '2' => 'Anexo II',
        '3' => 'Anexo III',
        '4' => 'Anexo IV',
        '5' => 'Anexo V'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$anexos[$valor] : '';
    }
}
