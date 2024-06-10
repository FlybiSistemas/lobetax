<?php

namespace App\Actions;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class ImportarNotaAction
{
    /**
     * Cria uma nota com base no xml passado.
     *
     * @param string $xmlString
     * @param string $filename
     * @return void
     */
    public function __invoke(string $xmlString, string $filename): void
    {
        $obj = simplexml_load_string($xmlString, 'SimpleXMLElement', LIBXML_NOBLANKS | LIBXML_NOCDATA);
        if (!isset($obj->NFe)) { // Se não for uma nota fiscal.
            // verificar se é um evento
            // if (isset($obj->evento)) {
            //     $this->importarEvento($xmlString);
            //     return;
            // }
            Log::info("\n\n\tObjeto não possui tag NFe. Arquivo: {$filename}\n\n");
            return;
        }
        $chaveNota = (string)$obj->NFe->infNFe['Id'];
        $chNFE = substr($chaveNota, 3, strlen($chaveNota));
        // $chNFE = explode('.', $filename)[0];
        // $notaExiste = Nota::where('chave_nota', $chNFE)->count() > 0;
        // if ($notaExiste) {
        //     Log::info("\tNota {$chNFE} já existente.\n");
        //     return;
        // }
        Log::info(">> Importando Nota: {$chNFE}");
        $impNota = (new CreateNotaFromFileAction())($xmlString, $chNFE);
        // verifica se possui a tag de protocolo e se foi de cancelamento
        if (isset($obj->protNFe)) {
            if (isset($obj->protNFe->infProt)) {
                if (($obj->protNFe->infProt->cStat == 101) || ($obj->protNFe->infProt->cStat == 150)) {
                    // TODO: apenas registrar em log.
                    Log::info("\t\t>> Nota {$chNFE} cancelada.");
                }
            }
        }
        // AprovarNotasJob::dispatch($impNota->id);
        Log::info("\t>> Nota: {$chNFE} importada");
    }

    public function importarEvento($xmlString)
    {
        $obj = simplexml_load_string($xmlString, 'SimpleXMLElement', LIBXML_NOBLANKS);
        $chaveNota = (string)$obj->evento->infEvento['Id'];
        $chaveEvento = substr($chaveNota, 8, 44);
        $notaExiste = Nota::where('chave_nota', $chaveEvento)->get();
        if ($notaExiste->count() > 0) {
            Log::info("\t Criando evento para nota: {$chaveEvento}");
            $evento = (new CreateEventoFromFileAction())($xmlString, $chaveEvento, $notaExiste->first());
        } else {
            Log::info("\t Nota {$chaveEvento} não existe. Evento salvo.");
            $evento = (new CreateEventoFromFileAction())($xmlString, $chaveEvento);
        }
    }
}
