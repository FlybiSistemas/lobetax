<?php

namespace App\Helpers;

class TipoPessoaHelper
{
    public static $tipos = [
        'A' => 'AMBOS',
        'D' => 'DESTINATARIO',
        'E' => 'EMITENTE'
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$tipos[$valor] : 'NAO INFORMADO';
    }
}
