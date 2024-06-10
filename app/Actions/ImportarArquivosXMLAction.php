<?php

namespace App\Actions;

use Illuminate\Support\Facades\Log;

class ImportarArquivosXMLAction
{
    public function __invoke(array $files): void
    {
        Log::info(">>Inicio da importação. " . count($files) . " notas a serem importadas.\n\n");
        foreach ($files as $file) {
            $filename = $file->getClientOriginalName();
            $folder = storage_path('temp/notas/');
            $file->move($folder, $filename);
            $filepath = $folder . $filename;
            $xmlString = file_get_contents($filepath);
            (new ImportarNotaAction())($xmlString, $filename);
            unlink($filepath);
        }
        Log::info(">>Fim da importação. " . count($files) . " notas importadas.\n\n");
    }
}
