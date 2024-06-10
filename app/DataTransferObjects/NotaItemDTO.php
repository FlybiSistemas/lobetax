<?php

namespace App\DataTransferObjects;

use App\Models\VwNotaItem;
use App\Helpers\TipoTributoCategoriaHelper;
use Illuminate\Support\Collection;

class NotaItemDTO
{
    public $codigo;
    public $nota_id;
    public $nome;
    public $fields;

    /**
     * Recebe o item da nota com os campos, regras e as categorias para montar os campos a serem exibidos
     * na ordem configurada em categorias (TributoCategoria)
     *
     * @param VwNotaItem $item
     * @param Collection $campos
     * @param Collection $regras
     * @param Collection $categorias
     *
     * @return array
     */
    public static function from(VwNotaItem $item, Collection $campos, ?Collection $regras, $categorias): array
    {
        $notaItemDTO = [];
        $camposBase = [];
        $camposBase['id'] = $item->id;
        $camposBase['item_codigo'] = $item->item_codigo;
        $camposBase['item_ean'] = $item->item_ean;
        $camposBase['nota_id'] = $item->nota_id;
        $camposBase['item_nome'] = $item->item_nome;
        $camposBase['item_quantidade'] = $item->item_quantidade;
        $camposBase['item_valor_total'] = $item->item_valor_total;
        $notaItemDTO['PRODUTO'] = $camposBase;
        $camposAux = [];
        NotaItemDTO::preencherCamposNota($camposAux, $item);
        // NotaItemDTO::preencherCamposExtras($camposAux, $campos, $item);
        // if (isset($regras)) {
        //     NotaItemDTO::preencherRegras($camposAux, $regras, $item);
        // }
        $camposGeral = [];
        foreach ($categorias as $categoriaKey => $categoriaValue) {
            $camposCategoria = [];
            foreach ($categoriaValue as $value) {
                $camposCategoria[$value->campo] = isset($camposAux[$value->campo]) ? $camposAux[$value->campo] : null;
                $camposGeral[$value->campo] = isset($camposAux[$value->campo]) ? $camposAux[$value->campo] : null;
            }
            $notaItemDTO[TipoTributoCategoriaHelper::get($categoriaKey)] = $camposCategoria;
        }
        $camposForaOrdem = array_diff(array_keys($camposAux), array_keys($camposGeral));
        $camposGeral = [];
        foreach ($camposForaOrdem as $campo) {
            $camposGeral[$campo] = $camposAux[$campo];
        }
        $notaItemDTO['OUTROS'] = $camposGeral;
        return $notaItemDTO;
    }

    public static function from2($itens, Collection $campos, ?Collection $regras, Collection $categorias, array $baseLegal = []): array
    {
        $notaItemDTO = [];
        $camposAux = [];

        foreach ($itens as $item) {
            $aux = [];
            NotaItemDTO::preencherCamposNota($aux, $item);
            NotaItemDTO::preencherCamposExtras($aux, $campos, $item, $baseLegal);
            if (isset($regras)) {
                NotaItemDTO::preencherRegras($aux, $regras, $item);
            }
            $camposAux[] = $aux;
        }


        $camposGeral = [];

        foreach ($itens as $item) {
            foreach ($categorias as $categoria) {
                $camposCategoria = [];
                foreach ($categoria->campos as $campo) {
                    $camposCategoria[$campo->campo] = isset($camposAux[$campo->campo]) ? $camposAux[$campo->campo] : null;
                    $camposGeral[$campo->campo] = isset($camposAux[$campo->campo]) ? $camposAux[$campo->campo] : null;
                }
                $notaItemDTO[$categoria->nome][$item->item_codigo] = $camposCategoria;
            }
        }

        return [
            'notaItemDTO' => $notaItemDTO,
            'baseLegal' => $baseLegal
        ];
    }

    public static function preencherCamposNota(array &$dados, VwNotaItem $item)
    {
        foreach (VwNotaItem::$camposTributos as $key => $value) {
            $dados[$key] = $item->{$key};
        }
    }

    public static function preencherCamposExtras(array &$dados, Collection $campos, VwNotaItem $item, array &$baseLegal = [])
    {
        foreach ($campos as $campoRegra) {
            $valorCampo = $item
                ->camposValores()
                ->where('nota_item_id', $item->id)
                ->where('campo_id', $campoRegra->campo_id)
                ->where('campo_regra_id', $campoRegra->id)
                ->orderBy('id', 'desc')
                ->first();
            $valorRegra = $valorCampo ? $valorCampo->valor_regra : null;
            $dados[$campoRegra->campo->codigo] = $valorRegra;
            $cpAux = $item->camposValores()->where('campo_id', $campoRegra->campo_id)->first();
            if (isset($cpAux)) {
                $campoAux = $campos->where('id', $cpAux->campo_regra_id);
                $baseLegal['regra'][$campoRegra->campo->codigo] = $campoAux->first()->base_legal;
                $baseLegal['id'][$campoRegra->campo->codigo] = $campoAux->first()->id;
            }
        }
    }

    public static function preencherRegras(array &$dados, Collection $regras, VwNotaItem $item)
    {
        foreach ($regras as $regra) {
            $valorRegra = $item
                ->criticas()
                ->where('nota_item_id', $item->id)
                ->where('regra_id', $regra->id)
                ->orderBy('id', 'desc')
                ->first();
            $dados[$regra->codigo] = $valorRegra ? $valorRegra->valor_regra : null;
        }
    }
}
