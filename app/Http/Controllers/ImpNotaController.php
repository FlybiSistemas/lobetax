<?php

namespace App\Http\Controllers;

use App\Actions\GetXMLTagsAction;
use App\Actions\ImportarArquivosXMLAction;
use App\Jobs\ImportarNotasDaAPIPorCnpjJob;
use App\Models\Tabela;
use App\Repositories\ImpNotaItemRepository;
use App\Repositories\ImpNotaRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use NFePHP\DA\NFe\Danfe;
use stdClass;

class ImpNotaController
{
    private ImpNotaRepository $impNotaRepository;
    private ImpNotaItemRepository $impNotaItemRepository;

    public function __construct(
        ImpNotaRepository     $impNotaRepo,
        ImpNotaItemRepository $impNotaItemRepo
    ) {
        $this->impNotaRepository = $impNotaRepo;
        $this->impNotaItemRepository = $impNotaItemRepo;
    }

    public function index()
    {
        $tabelas = Tabela::all();
        return view("imp_notas.index", compact('tabelas'));
    }

    public function search(Request $request)
    {
        $searchData = $request->all();
        $impNotas = $this->impNotaRepository->all($searchData);
        $table = [];
        
        if(isset($searchData['tabela']) && $searchData['tabela'])
            $table = (new GetXMLTagsAction())($impNotas, Tabela::find($searchData['tabela'])->colunas);
        else
            $table = (new GetXMLTagsAction())($impNotas);


        return view("imp_notas.table", [
            "table" => $table,
            'impNotas' => $impNotas,
            "page" => $request->input("page", 0),
            'filter_take' => $request->input('filter_take'),
        ]);
    }

    public function find(Request $request)
    {
        $impNotas = $this->impNotaRepository->findToSelect2js($request->input("q"));
        return json_encode($impNotas);
    }

    public function create()
    {
        return view("{$this->basePath}imp_notas.create");
    }

    public function import()
    {
        return view("imp_notas.import");
    }

    public function store(Request $request)
    {
        $totalNotasImportadas = 0;
        if (!$request->has('arquivos')) {
            return response()->json("Arquivo Inválido.", 500);
        }
        try {
            DB::beginTransaction();
            $files = $request->file('arquivos');
            (new ImportarArquivosXMLAction())($files);
            DB::commit();
            return response()->json("Importação realizada com sucesso.", 200);
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error($e->getMessage());
            return response()->json("Não foi possível salvar. Mensagem: {$e->getMessage()}", 500);
        }
    }

    public function importarNotaApi(Request $request)
    {
        ImportarNotasDaAPIPorCnpjJob::dispatch();
        return response()->json("Processo de importação iniciado. suas notas estaram disponiveis em alguns instantes.", 200);
    }

    public function show($id)
    {
        $impNota = $this->impNotaRepository->find($id);

        if (!$impNota) {
            return response()->json("Registro não encontrado.", 500);
        }

        return view("{$this->basePath}imp_notas.show", ["impNota" => $impNota]);
    }

    public function aprovarForm($id)
    {
        $impNota = $this->impNotaRepository->find($id);

        if (!$impNota) {
            return response()->json("Registro não encontrado.", 500);
        }

        return view("{$this->basePath}imp_notas.aprovarForm", ['impNota' => $impNota]);
    }

    public function aprovar($id)
    {
        $impNota = $this->impNotaRepository->find($id);
        if (!$impNota) {
            return response()->json("Registro não encontrado.", 500);
        }
        $nota = (new AprovarImpNotaAction())($impNota);
        if ($nota) {
            $descricao = "[NOTA APROVADA]";
            if ($nota->status == '4') {
                $descricao = "[NOTA REPROVADA | O EMITENTE E O DESTINATARIO NAO FAZEM PARTE DAS EMPRESAS HABILITADAS PARA GESTAO]";
            }
            (new AdicionarMovimentoNotaAction())($nota, Auth::user(), $descricao);
            $this->impNotaRepository->update($impNota, ['aprovada' => 'S']);
            return response()->json("Nota aprovada com sucesso.", 200);
        }

        $this->impNotaRepository->update($impNota, ['aprovada' => 'N']);
        return response()->json("Não foi possível aprovar.", 500);
    }

    public function aprovarEmLoteForm(Request $request)
    {
        $ids = $request->input('nota_id');
        if (!$ids) {
            return response()->json("Voc&ecirc; deve selecionar pelo menos uma nota.", 500);
        }
        return view("{$this->basePath}imp_notas.aprovarEmLoteForm", ['ids' => $ids]);
    }

    public function aprovarEmLote(Request $request)
    {
        $ids = $request->input('nota_id');
        if (!$ids) {
            return response()->json("Voc&ecirc; deve selecionar pelo menos uma nota.", 500);
        }
        foreach ($ids as $id) {
            $impNota = $this->impNotaRepository->find($id);
            if (!$impNota) {
                return response()->json("Registro não encontrado.", 500);
            }
            $nota = (new AprovarImpNotaAction())($impNota);
            if ($nota) {
                $descricao = "[NOTA APROVADA]";
                if ($nota->status == '4') {
                    $descricao = "[NOTA REPROVADA | O EMITENTE E O DESTINATARIO NAO FAZEM PARTE DAS EMPRESAS HABILITADAS PARA GESTAO]";
                }
                (new AdicionarMovimentoNotaAction())($nota, Auth::user(), $descricao);
                $this->impNotaRepository->update($impNota, ['aprovada' => 'S']);
            }
        }
        return response()->json("Nota aprovada com sucesso.", 200);
    }

    public function destroy($id)
    {
        $impNota = $this->impNotaRepository->find($id);

        if (!$impNota) {
            return response()->json("Registro não encontrado.", 500);
        }
        $this->impNotaItemRepository->deleteAll($impNota->id);
        $this->impNotaRepository->delete($impNota);
        return $id;
    }

    public function xml($id)
    {
        $impNota = $this->impNotaRepository->find($id);
        if (!$impNota) {
            return response()->json("Registro não encontrado.", 500);
        }

        return response()->streamDownload(function () use ($impNota) {
            echo $impNota->xml;
        }, $impNota->arquivo . ".xml");
    }

    public function imprimir($id)
    {
        $impNota = $this->impNotaRepository->find($id);
        if (!$impNota) {
            return response()->json("Registro não encontrado.", 500);
        }
        if (!isset($impNota->xml)) {
            return response()->json("Esta nota não possui XML.", 500);
        }
        $logo = '';
        try {
            $danfe = new Danfe($impNota->xml);
            $danfe->exibirTextoFatura = false;
            $danfe->exibirPIS = false;
            $danfe->exibirIcmsInterestadual = false;
            $danfe->exibirValorTributos = false;
            $danfe->descProdInfoComplemento = false;
            $danfe->setOcultarUnidadeTributavel(true);
            $danfe->obsContShow(false);
            $danfe->printParameters(
                $orientacao = 'P',
                $papel = 'A4',
                $margSup = 2,
                $margEsq = 2
            );
            $danfe->logoParameters($logo, $logoAlign = 'C', $mode_bw = false);
            $danfe->setDefaultFont($font = 'times');
            $danfe->setDefaultDecimalPlaces(4);
            $danfe->debugMode(false);
            $danfe->creditsIntegratorFooter('Flybi Sistemas');
            // Caso queira mudar a configuracao padrao de impressao
            /*  $this->printParameters( $orientacao = '', $papel = 'A4', $margSup = 2, $margEsq = 2 ); */
            // Caso queira sempre ocultar a unidade tributável
            /*  $this->setOcultarUnidadeTributavel(true); */
            //Informe o numero DPEC
            /*  $danfe->depecNumber('123456789'); */
            //Configura a posicao da logo
            /*  $danfe->logoParameters($logo, 'C', false);  */
            //Gera o PDF
            $pdf = $danfe->render($logo);

            return response()->stream(function () use ($pdf) {
                echo $pdf;
            }, 200, ['content-type' => 'application/pdf']);
        } catch (\Exception $e) {
            echo "Ocorreu um erro durante o processamento :" . $e->getMessage();
        }
    }
}
