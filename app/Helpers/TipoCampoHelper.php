<?php

namespace App\Helpers;

class TipoCampoHelper
{
    public static $tipos = [
        'ncm' => 'NCM',
        'cest' => 'CEST',
        'ufo' => 'UF Origem',
        'ufd' => 'UF Destino',
        'cfop' => 'CFOP',
        'ori' => 'Origem',
        'flx' => 'FLX',
        'tpd' => 'TP Destino',
        'muo' => 'Mun Origem',
        'mud' => 'Mun Destino',
        'cnpjo' => 'CNPJ Origem',
        'cnpjd' => 'CNPJ Destino',
        'age' => 'ALQ Geral',
        'apr' => 'ALQ P',
        'amv' => 'AMV',
        'mva' => 'mva',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : 'TEXTO';
    }
}
