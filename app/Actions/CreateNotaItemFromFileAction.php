<?php

namespace App\Actions;

use App\DataTransferObjects\CofinsDTO;
use App\DataTransferObjects\IcmsDTO;
use App\DataTransferObjects\IiDTO;
use App\DataTransferObjects\IpiDTO;
use App\DataTransferObjects\PisDTO;
use App\Helpers\XmlHelper;
use App\Helpers\StringHelper;
use App\Models\ImpNota;
use App\Models\ImpNotaItem;
use Exception;
use Illuminate\Support\Facades\Log;

class CreateNotaItemFromFileAction
{
    /**
     * Load data from det tag in XML e save ImpNotaItem
     *
     * @param ImpNota $nota
     * @param array $tagItens
     * @param $xmlObject
     * @return void
     */
    public function __invoke(ImpNota $nota, array $tagItens, $xmlObject): void
    {
        try {
            foreach ($tagItens as $tagItem) {
                $xmlProd = $this->getProd($xmlObject, $tagItem->prod->cProd);
                $item = new ImpNotaItem();
                $item->imp_nota_id = $nota->id;
                $item->cprod = $tagItem->prod->cProd;
                Log::info("\t>> Importando item {$item->cprod}");

                if (XmlHelper::tagExists($xmlProd, 'cEAN')) {
                    $item->cean = StringHelper::retirarCaracteresEspeciais($xmlProd->cEAN);
                }
                $item->xprod = $tagItem->prod->xProd;
                $item->ncm = $tagItem->prod->NCM;
                if (isset($tagItem->prod->CEST)) {
                    $item->cest = $tagItem->prod->CEST;
                }
                $item->cfop = $tagItem->prod->CFOP;
                $item->ucom = StringHelper::retirarCaracteresEspeciais($tagItem->prod->uCom);
                $item->qcom = $tagItem->prod->qCom;
                $item->vuncom = $tagItem->prod->vUnCom;
                $item->vprod = $tagItem->prod->vProd;
                if (isset($tagItem->prod->vOutro)) {
                    $item->voutro = $tagItem->prod->vOutro;
                }
                if (isset($tagItem->prod->vFrete)) {
                    $item->vfrete = $tagItem->prod->vFrete;
                }
                if (isset($tagItem->prod->vSeg)) {
                    $item->vseg = $tagItem->prod->vSeg;
                }
                if (isset($tagItem->prod->vDesc)) {
                    $item->vdesc = $tagItem->prod->vDesc;
                }
                if (isset($tagItem->prod->med) && isset($tagItem->prod->med->cProdANVISA)) {
                    $item->med_cprodanvisa = $tagItem->prod->med->cProdANVISA == 'ISENTO' ? 0 : $tagItem->prod->med->cProdANVISA;
                }
                if (isset($tagItem->prod->med) && isset($tagItem->prod->med->vPMC)) {
                    $item->med_vpmc = $tagItem->prod->med->vPMC;
                }
                if (isset($tagItem->imposto)) {
                    if (isset($tagItem->imposto->vTotTrib)) {
                        $item->vtottrib = $tagItem->imposto->vTotTrib;
                    }

                    if (isset($tagItem->imposto->ICMS)) {
                        $this->preencherIcms($item, $tagItem->imposto->ICMS);
                    }

                    if (isset($tagItem->imposto->IPI)) {
                        $this->preencherIpi($item, $tagItem->imposto->IPI);
                    }

                    if (isset($tagItem->imposto->II)) {
                        $this->preencherIi($item, $tagItem->imposto->II);
                    }

                    if (isset($tagItem->imposto->PIS)) {
                        $this->preencherPis($item, $tagItem->imposto->PIS);
                    }
                    if (isset($tagItem->imposto->COFINS)) {
                        $this->preencherCofins($item, $tagItem->imposto->COFINS);
                    }
                }
                $item->save();
            }
        } catch (Exception $e) {
            Log::error($e->getMessage());
            Log::error($xmlObject);
        }
    }

    /**
     * @param $item
     * @param $xmlTagIcms
     * @return void
     */
    private function preencherIcms($item, $xmlTagIcms): void
    {
        $icmsDTO = IcmsDTO::fromXmlTag($xmlTagIcms);
        $item->icms_origem = $icmsDTO->orig;
        $item->icms_cst = StringHelper::retirarCaracteresEspeciais($icmsDTO->tipo);
        $item->icms_base_calculo = $icmsDTO->baseCalculo;
        $item->icms_percentual = $icmsDTO->percentual;
        $item->icms_valor = $icmsDTO->valor;
        if ($icmsDTO->percentualReducaoBaseCalculo) {
            $item->icms_predbc = $icmsDTO->percentualReducaoBaseCalculo;
        }
        if ($icmsDTO->valorDesoneracao) {
            $item->icms_vicmsdeson = $icmsDTO->valorDesoneracao;
            $item->icms_motdes = $icmsDTO->desoneracaoMotivo;
        }
        if ($icmsDTO->valorRetido) {
            $item->icms_valor_retido = $icmsDTO->valorRetido;
        }
    }

    private function preencherIpi($item, $xmlTagIpi): void
    {
        $ipiDTO = IpiDTO::fromXmlTag($xmlTagIpi);
        $item->ipi_clenq = $ipiDTO->clEnq;
        $item->ipi_cnpjprod = $ipiDTO->cnpjProd;
        $item->ipi_cselo = $ipiDTO->cSelo;
        $item->ipi_qselo = $ipiDTO->qSelo;
        $item->ipi_cenq = StringHelper::retirarCaracteresEspeciais($ipiDTO->cEnq);
        $item->ipi_cst = StringHelper::retirarCaracteresEspeciais($ipiDTO->cst);
        $item->ipi_vbc = $ipiDTO->vBC;
        $item->ipi_pipi = $ipiDTO->pIPI;
        $item->ipi_qunid = $ipiDTO->qUnid;
        $item->ipi_vunid = $ipiDTO->vUnid;
        $item->ipi_vipi = $ipiDTO->vIPI;
    }

    private function preencherIi($item, $xmlTagIi): void
    {
        $iiDTOP = IiDTO::fromXmlTag($xmlTagIi);
        $item->ii_vbc = $iiDTOP->vBC;
        $item->ii_vdespadu = $iiDTOP->vDespAdu;
        $item->ii_vii = $iiDTOP->vII;
        $item->ii_viof = $iiDTOP->vIOF;
    }

    private function preencherPis($item, $xmlTagPis): void
    {
        $pisDTO = PisDTO::fromXmlTag($xmlTagPis);
        $item->pis_cst = StringHelper::retirarCaracteresEspeciais($pisDTO->cst);
        $item->pis_vbc = $pisDTO->vBC;
        $item->pis_ppis = $pisDTO->ppis;
        $item->pis_qbcprod = $pisDTO->qBCProd;
        $item->pis_valiqprod = $pisDTO->vAliqProd;
        $item->pis_vpis = $pisDTO->vpis;
    }

    private function preencherCofins($item, $xmlTagCofins): void
    {
        $cofinsDTO = CofinsDTO::fromXmlTag($xmlTagCofins);
        $item->cofins_cst = StringHelper::retirarCaracteresEspeciais($cofinsDTO->cst);
        $item->cofins_vbc = $cofinsDTO->vBC;
        $item->cofins_pcofins = $cofinsDTO->pCofins;
        $item->cofins_qbcprod = $cofinsDTO->qBCProd;
        $item->cofins_valiqprod = $cofinsDTO->vAliqProd;
        $item->cofins_vcofins = $cofinsDTO->vCofins;
    }

    public function tagExists($xmlElement, $tag)
    {
        return isset($xmlElement->{$tag}) && $xmlElement->{$tag} != '';
    }
    /**
     * Pega o item do xml
     *
     * @param $xmlObject
     * @param $codProd
     * @return void
     */
    public function getProd($xmlObject, $codProd)
    {
        $item = null;
        foreach ($xmlObject->NFe->infNFe->det->children() as $prod) {
            if ($prod->cProd == $codProd) {
                $item = $prod;
            }
        }
        return $item;
    }
}
