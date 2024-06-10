<?php

namespace App\DataTransferObjects;

use App\Helpers\StringHelper;
use App\Helpers\XmlHelper;

class IcmsDTO
{
    public ?int $orig = null;
    public $tipo; // CST, CSOSN e etc.
    public $baseCalculo; // vbc, vbcstret e etc
    public $percentual;
    public $percentualReducaoBaseCalculo;
    public $valor;
    public $valorRetido;
    public $valorDesoneracao;
    public $desoneracaoMotivo;

    public static function fromXmlTag($xmlTag): IcmsDTO
    {
        $icmsDTO = new IcmsDTO();
        if (
            isset($xmlTag->ICMS00) ||
            isset($xmlTag->ICMS10) ||
            isset($xmlTag->ICMS20) ||
            isset($xmlTag->ICMS51) ||
            isset($xmlTag->ICMS70) ||
            isset($xmlTag->ICMS90)
        ) {
            $tagIcms = current($xmlTag);
            $icmsDTO->orig = $tagIcms->orig;
            $icmsDTO->tipo = $tagIcms->CST;
            $icmsDTO->baseCalculo = $tagIcms->vBC;
            $icmsDTO->percentual = $tagIcms->pICMS;
            $icmsDTO->valor = StringHelper::contains($tagIcms->vICMS, ',') ? StringHelper::brToUS($tagIcms->vICMS) : $tagIcms->vICMS;
            if ((isset($xmlTag->ICMS20) || (isset($xmlTag->ICMS70))) && isset($tagIcms->pRedBC)) {
                $icmsDTO->percentualReducaoBaseCalculo = $tagIcms->pRedBC;
            }
        }
        if (isset($xmlTag->ICMS30)) {
            $tagIcms = $xmlTag->ICMS30;
            $icmsDTO->orig = $tagIcms->orig;
            $icmsDTO->tipo = $tagIcms->CST;
            $icmsDTO->baseCalculo = $tagIcms->vBCST;
            $icmsDTO->percentual = $tagIcms->pICMSST;
            $icmsDTO->valor = $tagIcms->vICMSST;
        }
        if (
            isset($xmlTag->ICMS40) ||
            isset($xmlTag->ICMS41) ||
            isset($xmlTag->ICMS50)
        ) {
            $tagIcms = current($xmlTag);
            $icmsDTO->orig = $tagIcms->orig;
            $icmsDTO->tipo = $tagIcms->CST;
            $icmsDTO->baseCalculo = 0;
            $icmsDTO->percentual = 0;
            if (isset($tagIcms->vICMSDeson)) {
                $icmsDTO->valor = 0;
                $icmsDTO->valorDesoneracao = $tagIcms->vICMSDeson;
                $icmsDTO->desoneracaoMotivo = $tagIcms->motDesICMS;
            }
        }
        if (isset($xmlTag->ICMS60)) {
            $tagIcms = $xmlTag->ICMS60;
            $icmsDTO->orig = $tagIcms->orig;
            $icmsDTO->tipo = $tagIcms->CST;
            $icmsDTO->baseCalculo = XmlHelper::tagExists($tagIcms, 'vBCSTRet') ? $tagIcms->vBCSTRet : 0;
            $icmsDTO->percentual = 0;
            $icmsDTO->valorRetido = XmlHelper::tagExists($tagIcms, 'vICMSSTRet') ? $tagIcms->vICMSSTRet : 0;
        }
        if (isset($xmlTag->ICMSSN500)) {
            $tagIcms = $xmlTag->ICMSSN500;
            $icmsDTO->orig = $tagIcms->orig;
            $icmsDTO->tipo = $tagIcms->CSOSN;
            $icmsDTO->baseCalculo = XmlHelper::tagExists($tagIcms, 'vBCSTRet') ? $tagIcms->vBCSTRet : 0;
            $icmsDTO->percentual = XmlHelper::tagExists($tagIcms, 'pST') ? $tagIcms->pST : 0;
            $icmsDTO->valorRetido = XmlHelper::tagExists($tagIcms, 'vICMSSTRet') ? $tagIcms->vICMSSTRet : 0;
        }
        if (isset($xmlTag->ICMSST)) {
            $tagIcms = $xmlTag->ICMSST;
            $icmsDTO->orig = $tagIcms->orig;
            $icmsDTO->tipo = $tagIcms->CST;
            $icmsDTO->baseCalculo = XmlHelper::tagExists($tagIcms, 'vBCSTRet') ? $tagIcms->vBCSTRet : 0;
            $icmsDTO->percentual = XmlHelper::tagExists($tagIcms, 'pST') ? $tagIcms->pST : 0;
            $icmsDTO->valorRetido = XmlHelper::tagExists($tagIcms, 'vICMSSTRet') ? $tagIcms->vICMSSTRet : 0;
        }
        if (isset($xmlTag->ICMSSN102)) {
            $tagIcms = $xmlTag->ICMSSN102;
            $icmsDTO->orig = $tagIcms->orig;
            $icmsDTO->tipo = $tagIcms->CSOSN;
            $icmsDTO->baseCalculo = 0;
            $icmsDTO->percentual = 0;
            $icmsDTO->valor = 0;
        }
        return $icmsDTO;
    }
}
