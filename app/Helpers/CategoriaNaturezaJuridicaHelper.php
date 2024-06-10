<?php

namespace App\Helpers;

class CategoriaNaturezaJuridicaHelper
{
    public static $categorias = [
        'F' => 'FEDERAL',
        'M' => 'MUNICIPAL',
        'E' => 'ESTADUAL',
        'P' => 'PRIVADO',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$categorias[$valor] : '--';
    }
}
