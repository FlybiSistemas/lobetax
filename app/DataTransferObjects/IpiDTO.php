<?php

namespace App\DataTransferObjects;

class IpiDTO
{
    // tag pai = IPI
    public ?int $clEnq = null;
    public ?int $cnpjProd = null;
    public ?string $cSelo = null;
    public ?string $qSelo = null;
    public ?string $cEnq = null;
    // tag pai = IPITrib
    public ?string $cst = null;
    public ?float $vBC = null;
    public ?float $pIPI = null;
    public ?float $qUnid = null;
    public ?float $vUnid = null;
    public ?float $vIPI = null;
    // tag = IPINT vem apenas o CST. Atualiza o CST direto

    public static function fromXmlTag($tagIpi): IpiDTO
    {
        $ipiDTO = new IpiDTO();
        $ipiDTO->clEnq = $tagIpi->clEnq ?? null;
        $ipiDTO->cnpjProd = $tagIpi->CNPJProd ?? null;
        $ipiDTO->cSelo = $tagIpi->cSelo ?? null;
        $ipiDTO->qSelo = $tagIpi->qSelo ?? null;
        $ipiDTO->cEnq = $tagIpi->cEnq ?? null;
        if (isset($tagIpi->IPITrib)) {
            $ipiDTO->cst = $tagIpi->IPITrib->CST ?? null;
            $ipiDTO->vBC = $tagIpi->IPITrib->vBC ?? null;
            $ipiDTO->pIPI = $tagIpi->IPITrib->pIPI ?? null;
            $ipiDTO->qUnid = $tagIpi->IPITrib->qUnid ?? null;
            $ipiDTO->qUnid = $tagIpi->IPITrib->qUnid ?? null;
            $ipiDTO->vUnid = $tagIpi->IPITrib->vUnid ?? null;
            $ipiDTO->vUnid = $tagIpi->IPITrib->vUnid ?? null;
            $ipiDTO->vIPI = $tagIpi->IPITrib->vIPI ?? null;
        } else if (isset($tagIpi->IPINT) && isset($tagIpi->IPINT->CST)) {
            $ipiDTO->cst = $tagIpi->IPINT->CST ?? null;
        }
        return $ipiDTO;
    }
}
