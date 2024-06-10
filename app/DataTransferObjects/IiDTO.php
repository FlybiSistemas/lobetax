<?php

namespace App\DataTransferObjects;

class IiDTO
{
    public ?float $vBC = null;
    public ?float $vDespAdu = null;
    public ?float $vII = null;
    public ?float $vIOF = null;

    public static function fromXmlTag($xmlTag): IiDTO
    {
        $iiDTO = new IiDTO();
        if (isset($xmlTag->II)) {
            $tagIi = $xmlTag->II;
            $iiDTO->vBC = (float)$tagIi->vBC;
            $iiDTO->vDespAdu = (float)$tagIi->vDespAdu;
            $iiDTO->vII = (float)$tagIi->vII;
            $iiDTO->vIOF = (float)$tagIi->vIOF;
        }
        return $iiDTO;
    }
}
