<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ImportarNotasDaAPIPorCnpjJob implements ShouldQueue, ShouldBeUnique
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public function __construct($cnpj, $dataInicial, $dataFinal)
    {
        Log::info("Job Notas criado!");
    }

    public function handle()
    {
        Log::info("Importar notas...");
        $xmls = (new ImportarNotasAPIAction())();

        if ($xmls == null || count($xmls) == 0) {
            Log::info("\tNenhuma nota emitida.");
            return;
        }
        try {
            DB::beginTransaction();
            Log::info("Importando " . count($xmls) . " notas");
            (new ImportarXMLAction())($xmls);
            Log::info("Notas importadas");
            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error($e->getMessage());
        }
    }

    /**
     * Get the tags that should be assigned to the job.
     *
     * @return array
     */
    public function tags()
    {
        return ['tenant:' . tenant('id'),];
    }
}
