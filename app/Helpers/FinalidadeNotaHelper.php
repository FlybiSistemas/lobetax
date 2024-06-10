<?php

namespace App\Helpers;

class FinalidadeNotaHelper
{
    public static $finalidades = [
        '1' => 'NORMAL',
        '2' => 'COMPLEMENTAR',
        '3' => 'AJUSTE',
        '4' => 'DEVOLUCAO'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$finalidades[$valor] : '';
    }
}
