<?php

namespace App\Actions;

use App\Models\Cnae;

class CreateCnaeFromJsonAction
{
    public function __invoke($data)
    {
        if (empty($data)) {
            return null;
        }
        $contribuinte = false;
        $cnaes = [];
        $cnaesPrincipal = [];
        foreach ($data as $obj) {
            $cnae = Cnae::where('codigo', $obj->codigo)->first();
            if (! $cnae) {
                $dadosCnae = [
                    'codigo' => $obj->codigo,
                    'descricao' => $obj->descricao,
                ];
                if (strpos($obj->descricao, 'omerci') !== false || strpos($obj->descricao, 'omérci') !== false) {
                    $dadosCnae['categoria'] = 'C';
                    $contribuinte = true;
                }
                $cnae = Cnae::create($dadosCnae);
            }

            $cnaes[] = $cnae->id;
            $cnaesPrincipal[] = ['principal' => $obj->principal];
        }
        $resultado = [$cnaes, $cnaesPrincipal, $contribuinte];

        return $resultado;
    }
}
