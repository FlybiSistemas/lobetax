<?php

namespace App\DataTransferObjects;

class CofinsDTO
{
    public ?string $cst = null;
    public ?float $vBC = null;
    public ?float $pCofins = null;
    public ?float $vCofins = null;
    public ?float $qBCProd = null;
    public ?float $vAliqProd = null;

    public static function fromXmlTag($xmlTag): CofinsDTO
    {
        $cofinsDTO = new CofinsDTO();
        if (isset($xmlTag->COFINSAliq)) {
            $tagCofins = $xmlTag->COFINSAliq;
            $cofinsDTO->cst = $tagCofins->CST;
            $cofinsDTO->vBC = (float)$tagCofins->vBC;
            $cofinsDTO->pCofins = (float)$tagCofins->pCOFINS;
            $cofinsDTO->vCofins = (float)$tagCofins->vCOFINS;
        }
        if (isset($xmlTag->COFINSQtde)) {
            $tagCofins = $xmlTag->COFINSQtde;
            $cofinsDTO->cst = $tagCofins->CST;
            $cofinsDTO->qBCProd = isset($tagCofins->qBCProd) ? (float)$tagCofins->qBCProd : null;
            $cofinsDTO->vAliqProd = isset($tagCofins->vAliqProd) ? (float)$tagCofins->vAliqProd : null;
            $cofinsDTO->vCofins = isset($tagCofins->vCOFINS) ? (float)$tagCofins->vCOFINS : null;
        }
        if (isset($xmlTag->COFINSNT)) {
            $tagCofins = $xmlTag->COFINSNT;
            $cofinsDTO->cst = $tagCofins->CST;
        }
        if (isset($xmlTag->COFINSOutr)) {
            $tagCofins = $xmlTag->COFINSOutr;
            $cofinsDTO->cst = $tagCofins->CST;
            $cofinsDTO->vBC = isset($tagCofins->vBC) ? (float)$tagCofins->vBC : null;
            $cofinsDTO->pCofins = isset($tagCofins->pCOFINS) ? (float)$tagCofins->pCOFINS : null;
            $cofinsDTO->qBCProd = isset($tagCofins->qBCProd) ? (float)$tagCofins->qBCProd : null;
            $cofinsDTO->vAliqProd = isset($tagCofins->vAliqProd) ? (float)$tagCofins->vAliqProd : null;
            $cofinsDTO->vCofins = isset($tagCofins->vCOFINS) ? (float)$tagCofins->vCOFINS : null;
        }
        return $cofinsDTO;
    }
}
