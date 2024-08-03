<?php

namespace App\Helpers;

class FormatarValorHelper
{
    public static function format($valor, $formato)
    {
        $resultado = '';
        $valorIndex = 0;
        
        for ($i = 0; $i < strlen($formato); $i++) {
            $caractere = $formato[$i];
            
            if ($caractere === '0' || $caractere === 'a') {
                // Adiciona o próximo dígito do valor
                if ($valorIndex < strlen($valor)) {
                    $resultado .= strval($valor)[$valorIndex++];
                }
            } else {
                // Adiciona caracteres não numéricos do formato diretamente
                $resultado .= $caractere;
            }
        }
        
        return $resultado;
    }
}
