<?php

namespace App\DataTransferObjects;

class PisDTO
{
    public ?string $cst = null;
    public ?float $vBC = null;
    public ?float $ppis = null;
    public ?float $vpis = null;
    public ?float $qBCProd = null;
    public ?float $vAliqProd = null;

    public static function fromXmlTag($xmlTag): PisDTO
    {
        $pisDTO = new PisDTO();
        if (isset($xmlTag->PISAliq)) {
            $tagPis = $xmlTag->PISAliq;
            $pisDTO->cst = $tagPis->CST;
            $pisDTO->vBC = (float)$tagPis->vBC;
            $pisDTO->ppis = (float)$tagPis->pPIS;
            $pisDTO->vpis = (float)$tagPis->vPIS;
        }
        if (isset($xmlTag->PISQtde)) {
            $tagPis = $xmlTag->PISQtde;
            $pisDTO->cst = $tagPis->CST;
            $pisDTO->qBCProd = (float)$tagPis->qBCProd;
            $pisDTO->vAliqProd = (float)$tagPis->vAliqProd;
            $pisDTO->vpis = (float)$tagPis->vPIS;
        }
        if (isset($xmlTag->PISNT)) {
            $tagPis = $xmlTag->PISNT;
            $pisDTO->cst = $tagPis->CST;
        }
        if (isset($xmlTag->PISOutr)) {
            $tagPis = $xmlTag->PISOutr;
            $pisDTO->cst = $tagPis->CST;
            $pisDTO->vBC = isset($tagPis->vBC) ? (float)$tagPis->vBC : null;
            $pisDTO->ppis = isset($tagPis->pPIS) ? (float)$tagPis->pPIS : null;
            $pisDTO->qBCProd = isset($tagPis->qBCProd) ? (float)$tagPis->qBCProd : null;
            $pisDTO->vAliqProd = isset($tagPis->vAliqProd) ? (float)$tagPis->vAliqProd : null;
            $pisDTO->vpis = isset($tagPis->vPIS) ? (float)$tagPis->vPIS : null;
        }
        return $pisDTO;
    }
}
