<?php

namespace App\Actions;

use App\Helpers\FormatterHelper;
use App\Helpers\StringHelper;
use App\Models\ImpNota;
use DOMDocument;

class CreateNotaFromFileAction
{
    /**
     * Load data from file and Save on Imp Nota table.
     *
     * @param string $xmlString
     * @param string $chave
     * @return void
     */
    public function __invoke(string $xmlString, string $chave): void
    {
        $dom = new DOMDocument();
        $dom->preserveWhiteSpace = false;
        $dom->formatOutput = true;
        $dom->loadXML($xmlString);

        $tagItens = $dom->getElementsByTagName('det');

        foreach ($tagItens as $index => $item) {
            $notaExistente = ImpNota::where('arquivo', $chave)
                            ->where('nItem', $item->getAttribute('nItem'))
                            ->first();

            if(!$notaExistente){
                $nota = new ImpNota();
                $nota->arquivo = $chave;
    
                $domCloned = clone $dom;
    
                $detNodes = $domCloned->getElementsByTagName('det');
                foreach ($detNodes as $detNode) {
                    if ($detNode->getAttribute('nItem') != $item->getAttribute('nItem')) {
                        $detNode->parentNode->removeChild($detNode);
                    }
                }
    
                $xmlStringModified = $domCloned->saveXML();
                $nota->nItem = $item->getAttribute('nItem');
    
                $nota->xml = $xmlStringModified;
                $nota->save();
            }

        }
    }
}
