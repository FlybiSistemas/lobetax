<?php

namespace App\Actions;

use App\Helpers\FormatterHelper;
use App\Helpers\StringHelper;
use App\Models\ImpNota;

class CreateNotaFromFileAction
{
    /**
     * Load data from file and Save on Imp Nota e Imp Item tables.
     *
     * @param string $xmlString
     * @param string $chave
     * @return void
     */
    public function __invoke(string $xmlString, string $chave): ImpNota
    {
        $nota = new ImpNota();
        $nota->arquivo = $chave;
        $nota->xml = $xmlString;
        $xmlObject = simplexml_load_string($xmlString, 'SimpleXMLElement', LIBXML_NOBLANKS | LIBXML_NOCDATA);
        $jsonObject = json_encode($xmlObject);
        $obj = json_decode($jsonObject);
        $tagNFe = $obj->NFe;
        $tagIde = $tagNFe->infNFe->ide;
        $tagEmit = $tagNFe->infNFe->emit;
        $tagDest = $tagNFe->infNFe->dest;
        if (isset($tagNFe->infNFe->infAdic)) {
            $tagInfAdic = $tagNFe->infNFe->infAdic;
        }
        $nota->ide_cuf = $tagIde->cUF;
        // $nota->ide_cnf = $tagIde->cNF;
        $nota->ide_cnf = $tagIde->nNF;
        $nota->ide_cmunfg = $tagIde->cMunFG;
        $nota->ide_iddest = $tagIde->idDest;
        $nota->ide_mod = $tagIde->mod;
        $nota->ide_finnfe = $tagIde->finNFe;
        $nota->ide_natop = $tagIde->natOp;
        $nota->data_hora_emissao = $tagIde->dhEmi;
        $nota->emit_cnpj = FormatterHelper::onlyNumbers($tagEmit->CNPJ);
        $nota->emit_xnome = $tagEmit->xNome;
        $nota->emit_crt = $tagEmit->CRT;
        if (isset($tagEmit->xFant)) {
            $nota->emit_xfant = $tagEmit->xFant;
        }
        $nota->emit_xlgr = $tagEmit->enderEmit->xLgr;
        if (strlen($tagEmit->enderEmit->nro) > 10) {
            $nota->emit_xlgr .= ' ' . $tagEmit->enderEmit->nro;
        } else {
            $nota->emit_nro = $tagEmit->enderEmit->nro;
        }
        $nota->emit_xbairro = $tagEmit->enderEmit->xBairro;
        $nota->emit_cmun = $tagEmit->enderEmit->cMun;
        $nota->emit_xmun = $tagEmit->enderEmit->xMun;
        $nota->emit_uf = StringHelper::retirarCaracteresEspeciais($tagEmit->enderEmit->UF);
        if (isset($tagEmit->enderEmit->CEP)) {
            $nota->emit_cep = StringHelper::retirarCaracteresEspeciais($tagEmit->enderEmit->CEP);
        }
        if (isset($tagEmit->enderEmit->cPais)) {
            $nota->emit_cpais = $tagEmit->enderEmit->cPais;
        }
        if (isset($tagEmit->enderEmit->xPais)) {
            $nota->emit_xpais = $tagEmit->enderEmit->xPais;
        }
        if (isset($tagEmit->enderEmit->fone)) {
            $nota->emit_fone = StringHelper::retirarCaracteresEspeciais($tagEmit->enderEmit->fone);
        }
        if (isset($tagEmit->IE)) {
            $nota->emit_ie = $tagEmit->IE;
        }
        if (isset($tagDest->CNPJ)) {
            $nota->dest_cnpj = FormatterHelper::onlyNumbers($tagDest->CNPJ);
        } else {
            $nota->dest_cnpj = FormatterHelper::onlyNumbers($tagDest->CPF);
        }
        $nota->dest_xnome = $tagDest->xNome;
        $nota->dest_xlgr = $tagDest->enderDest->xLgr;
        if (strlen($tagDest->enderDest->nro) > 10) { //As vezes o complemento vem no numero do endereço.
            $nota->dest_xlgr .= ' ' . $tagDest->enderDest->nro;
        } else {
            $nota->dest_nro = $tagDest->enderDest->nro;
        }
        $nota->dest_xbairro = $tagDest->enderDest->xBairro;
        $nota->dest_cmun = $tagDest->enderDest->cMun;
        $nota->dest_xmun = $tagDest->enderDest->xMun;
        $nota->dest_uf = StringHelper::retirarCaracteresEspeciais($tagDest->enderDest->UF);
        if (isset($tagEmit->enderDest->CEP)) {
            $nota->dest_cep = $tagEmit->enderDest->CEP;
        }
        if (isset($tagDest->enderDest->cPais)) {
            $nota->dest_cpais = $tagDest->enderDest->cPais;
        }
        if (isset($tagDest->enderDest->xPais)) {
            $nota->dest_xpais = $tagDest->enderDest->xPais;
        }
        if (isset($tagDest->enderDest->fone)) {
            $nota->dest_fone = StringHelper::retirarCaracteresEspeciais($tagDest->enderDest->fone);
        }
        if (isset($tagDest->IE)) {
            $nota->dest_ie = $tagDest->IE;
        }
        // if (isset($tagDest->email)) {
        //     $nota->dest_email = $tagDest->email;
        // }
        if (isset($tagInfAdic->infCpl)) {
            $nota->inf_adic = $tagInfAdic->infCpl;
        }
        $tagItens = $tagNFe->infNFe->det;
        if (!is_array($tagItens)) {
            $tagItens = [$tagItens];
        }
        $nota->qtde_itens = count($tagItens);
        $nota->vfrete = $tagNFe->infNFe->total->ICMSTot->vFrete;
        $nota->aprovada = 'N';
        $nota->total = $tagNFe->infNFe->total->ICMSTot->vNF;

        $nota->save();
        (new CreateNotaItemFromFileAction())($nota, $tagItens, $xmlObject);
        return $nota;
    }
}
