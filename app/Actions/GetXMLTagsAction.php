<?php

namespace App\Actions;

use App\Helpers\FormatarValorHelper;
use App\Helpers\TipoCampoHelper;
use App\Models\Coluna;
use App\Models\Lbtax;
use App\Models\Lbtaxfull;
use App\Models\Lbtaxlei;
use App\Models\Lbtaxuf;
use App\Models\Alerta;
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
            $colunas = Coluna::orderBy('ordem')->get();

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
                    if($coluna->formatacao != null){
                        $valor = FormatarValorHelper::format($valor, $coluna->formatacao);
                    }
                    $table[$i][$coluna->nome] = $valor;
                    continue;
                }
                if($coluna->tipo_coluna == 'b'){
                    $table[$i][$coluna->nome] = '';
                    if($coluna->coluna_id){
                        $search_value_1 = $table[$i][$coluna->coluna->nome];
    
                        $modelClass = "\App\Models\\" . $coluna->model_name;
                        $modelInstance = app($modelClass);
    
                        // Ao se tratar de NCM fazer resumir ate 4 digitos...
                        $result_1 = $modelInstance::where($coluna->comparacao, FormatarValorHelper::onlyNumbers($search_value_1))->first();
                    }


                    if(!$result_1){
                        $table[$i][$coluna->nome] = '';
                        Alerta::firstOrCreate(
                            [
                                'model_name'    => $coluna->model_name,
                                'valor'         => $search_value_1,
                            ],
                            [
                                'descricao'     => 'Valor inexistente no banco',
                                'rota'          => route('ncms.createByAlerta', FormatarValorHelper::onlyNumbers($search_value_1))
                            ]
                        );
                    }

                    if($coluna->buscar_name == 'subrelacao'){
                        $search_value_2 = $table[$i][$coluna->coluna2->nome];
                        $result_2 = $result_1->{$coluna->subrelacao_name}->where('codigo', FormatarValorHelper::onlyNumbers($search_value_2))->first();
                        if(!$result_2){
                            $table[$i][$coluna->nome] = $coluna->falso;
                            continue;
                        }
                        $table[$i][$coluna->nome] = $coluna->verdadeiro;
                        continue;
                    }

                    if($coluna->buscar_name == 'subrelacao_2' && $result_1){
                        if($coluna->subrelacao_extra == 'cnaes_destinatario'){
                            $cnaes = $impNotas[$i]->dest->cnaes->pluck('codigo');
                            $result_2 = $result_1->{$coluna->subrelacao_name}->whereIn('codigo', $cnaes)->first();
                            if(!$result_2){
                                $table[$i][$coluna->nome] = $coluna->falso;
                                continue;
                            }
                            $table[$i][$coluna->nome] = $coluna->verdadeiro;
                            continue;
                        }
                        if($coluna->subrelacao_extra == 'cnaes_emitente'){
                            $cnaes = $impNotas[$i]->emit->cnaes->pluck('codigo');
                            $result_2 = $result_1->{$coluna->subrelacao_name}->whereIn('codigo', $cnaes)->first();
                            if(!$result_2){
                                $table[$i][$coluna->nome] = $coluna->falso;
                                continue;
                            }
                            $table[$i][$coluna->nome] = $coluna->verdadeiro;
                            continue;
                        }
                    }

                    if($coluna->buscar_name != 'subrelacao_2' && $coluna->buscar_name != 'subrelacao'){
                        if($coluna->coluna_id){
                            $result_1->{$coluna->buscar_name};
                        }
                        else{
                            if($coluna->parametro_extra == 'cnaes_destinatario'){
                                $cnaes = $impNotas[$i]->dest->cnaes;
                                $verdadeiro = false;
                                foreach($cnaes as $cnae){
                                    if($cnae->{$coluna->buscar_name} == $coluna->comparacao){
                                        $verdadeiro = true;
                                    }
                                }
                                
                                $table[$i][$coluna->nome] = $verdadeiro ? $coluna->verdadeiro : $coluna->falso;
                                $verdadeiro = false;
                                continue;
                            }
                            if($coluna->parametro_extra == 'cnaes_emitente'){
                                $cnaes = $impNotas[$i]->emit->cnaes;
                                foreach($cnaes as $cnae){
                                    if($cnae->{$coluna->buscar_name} == $coluna->comparacao){
                                        $table[$i][$coluna->nome] = $coluna->verdadeiro;
                                        continue;
                                    }
                                }
                                $table[$i][$coluna->nome] = $coluna->falso;
                                continue;
                            }
                        }
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
            $valorDeBusca = FormatarValorHelper::onlyNumbers($valorDeBusca);
            while (strlen($valorDeBusca) >= 4) {
                // remover $removeCont caracteres do final do valorDeBusca
                if($removeCont != 0)
                    $valorDeBusca = substr($valorDeBusca, 0, - $removeCont);
                else
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
