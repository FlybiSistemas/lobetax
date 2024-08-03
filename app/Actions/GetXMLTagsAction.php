<?php

namespace App\Actions;

use App\Helpers\FormatarValorHelper;
use App\Helpers\TipoCampoHelper;
use App\Models\Coluna;
use App\Models\Lbtax;
use App\Models\Lbtaxfull;
use App\Models\Lbtaxlei;
use App\Models\Lbtaxuf;
use SimpleXMLElement;

class GetXMLTagsAction
{
    /**
     * Load data from file and Save on Imp Nota table.
     */

    public function __invoke($impNotas, $colunas = null)
    {
        $table = [];
        if(is_null($colunas))
            $colunas = Coluna::all();

        for($i = 0; $i < $impNotas->count(); $i++){
            $table[$i]['n° Item'] = $impNotas[$i]->nItem;
            $xml = simplexml_load_string($impNotas[$i]->xml, 'SimpleXMLElement', LIBXML_NOBLANKS | LIBXML_NOCDATA);
            foreach($colunas as $coluna){
                if($coluna->tipo_coluna == 'r'){
                    $valor = $this->getValueByReferencia($coluna->referencia, $xml);
    
                    
                    if(is_null($valor) && $coluna->referencias->count() > 0)
                    {
                        foreach($coluna->referencias as $referencia){
                            $valor = $this->getValueByReferencia($referencia->referencia, $xml);
                            if($valor) break;
                        }
                    }
                    if($coluna->nome == 'NCM'){
                        $valor = FormatarValorHelper::format($valor, '00.00-0000');
                    }
                    $table[$i][$coluna->nome] = $valor;
                    continue;
                }
                if($coluna->tipo_coluna == 'b'){
                    $table[$i][$coluna->nome] = '';
                    $search_value_1 = $table[$i][$coluna->coluna->nome];

                    $modelClass = "\App\Models\\" . $coluna->model_name;
                    $modelInstance = app($modelClass);

                    $result_1 = $modelInstance::where('codigo', $search_value_1)->first();

                    if(!$result_1){
                        $table[$i][$coluna->nome] = '';
                        continue;
                    }

                    continue;


                    

                }
                else{
                    $valorIA = $this->getValueIa($xml, $table[$i]);
                    if($valorIA && $valorIA->bsl){
                        $table[$i][$coluna->nome] = $valorIA->bsl;
                        continue;
                    }
                    $table[$i][$coluna->nome] = '';
                }
                
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

    private function getValueIa(SimpleXMLElement $xml, $item)
    {
        $ufD = $item['UF Destino'];
        $imposto = 'ICMSST';

        $leisPorUF = Lbtaxuf::where('uf', $ufD)
            ->where('imposto', $imposto)->orderBy('ordem')->get();

        foreach($leisPorUF as $lei){
            $chave = '|';
            $legislacao = $lei->legislacao;
            $regra = Lbtaxlei::where('cod', $legislacao)->first();
            $i = 0;
            foreach(TipoCampoHelper::$tipos as $key => $value){
                if($regra && isset($regra->chave[$i]) && $regra->chave[$i] == 'S'){ //Se for para validar
                    $retorno = $this->searchLbtaxfull($key, $legislacao, $item);
                    if($retorno) //Se for encontrado o valor correspondente em lbtaxfull
                        $chave .= 'S|';
                    else //Caso não ache nada
                        $chave .= 'N|';
                }
                else // Se não for, padrão "S"
                    $chave .= 'S|';
                $i++;
            }
            $chave = $legislacao.$chave;
            $regraEncontrada = Lbtax::where('iafis', 'ilike', '%'.$chave.'%')->first();
            if($regraEncontrada)
                return $regra;
        }
    }

    private function searchLbtaxfull($referencia_campo, $legislacao, $item){
        $coluna = Coluna::where('referencia_campo', $referencia_campo)->first();
        if(!$coluna)
            return True;
        $valorDeBusca = $item[$coluna->nome];
        if($referencia_campo != 'ncm'){
            return Lbtaxfull::where('chave_lei', $legislacao)
                ->where('chave_campo', $valorDeBusca)
                ->first();
        }
        else{
            $removeCont = 0;
            while (strlen($valorDeBusca) >= 4) {
                // remover $removeCont caracteres do final do valorDeBusca
                if($removeCont != 0)
                    $valorDeBusca = substr($valorDeBusca, 0, - $removeCont);
                $removeCont++;
                $retorno = Lbtaxfull::where('chave_lei', $legislacao)
                  ->where('chave_campo', $valorDeBusca)
                  ->first();
                if($retorno)
                    return $retorno;
            }
        }
    }
}
