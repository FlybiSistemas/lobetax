<?php

namespace App\Helpers;

class StatusNotaHelper
{
    public static $status = [
        '0' => 'Aberto',
        '1' => 'Pendente',
        '2' => 'Validação',
        '3' => 'Finalizado',
        '4' => 'Recusada',
        '5' => 'Cancelado',
    ];

    public static function get($valor)
    {
        return isset($valor) ? self::$status[$valor] : 'NAO INFORMADO';
    }

    public static function getColor($valor)
    {
        $color = "";
        switch ($valor) {
            case "0":
                $color = 'secondary';
                break;
            case "1":
                $color = 'warning';
                break;
            case "2":
                $color = 'primary';
                break;
            case "3":
                $color = 'success';
                break;
            default: // C ou R
                $color = 'danger';
        }
        return $color;
    }
}
