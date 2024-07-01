<?php

namespace App\Helpers;

class TipoCampoHelper
{
    public static $tipos = [
        'ncm' => 'NCM',
        'cest' => 'CEST',
        'ufo' => 'UFO',
        'ufd' => 'UFD',
        'cfop' => 'CFOP',
        'ori' => 'ORI',
        'flx' => 'FLX',
        'tpd' => 'TPD',
        'muo' => 'MUO',
        'mud' => 'MUD',
        'cnpjo' => 'CNPJO',
        'cnpjd' => 'CNPJD',
        'age' => 'ALQ G',
        'apr' => 'ALQ P',
        'amv' => 'AMV',
        'mva' => 'mva',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : 'TEXTO';
    }
}
