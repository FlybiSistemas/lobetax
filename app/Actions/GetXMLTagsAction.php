<?php

namespace App\Actions;

use App\Models\Coluna;
use SimpleXMLElement;

class GetXMLTagsAction
{
    /**
     * Load data from file and Save on Imp Nota table.
     */

    public function __invoke($impNotas)
    {
        $table = [];
        $colunas = Coluna::all();

        for($i = 0; $i < $impNotas->count(); $i++){
            $table[$i]['n° Item'] = $impNotas[$i]->nItem;
            $xml = simplexml_load_string($impNotas[$i]->xml, 'SimpleXMLElement', LIBXML_NOBLANKS | LIBXML_NOCDATA);
            foreach($colunas as $coluna){
                $valor = $this->getValueByReferencia($coluna->referencia, $xml);
                if(is_null($valor) && $coluna->referencias->count() > 0)
                {
                    foreach($coluna->referencias as $referencia){
                        $valor = $this->getValueByReferencia($referencia->referencia, $xml);
                        if($valor) break;
                    }
                }
                $table[$i][$coluna->nome] = $valor;
            }
        }

        return $table;
    }

    private function getValueByReferencia(string $referencia, SimpleXMLElement $xml)
    {
        $parts = explode('/', $referencia);
        return array_reduce($parts, function ($carry, $part) {
            return is_object($carry) && isset($carry->{$part}) ? $carry->{$part} : null;
        }, $xml);
    }
}
