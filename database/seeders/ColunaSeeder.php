<?php

namespace Database\Seeders;

use App\Models\Coluna;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ColunaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $itens = [
            [
              "nome" => "N° Doc",
              "referencia" => "NFe/infNFe/ide/nNF",
              "coluna_id" => null,
              "referencia_campo" => null,
            ],
            [
              "nome" => "Descrição",
              "referencia" => "NFe/infNFe/det/prod/xProd",
              "coluna_id" => null,
              "referencia_campo" => null,
            ],
            [
              "nome" => "Valor Produto",
              "referencia" => "NFe/infNFe/det/prod/vProd",
              "coluna_id" => null,
              "referencia_campo" => null,
            ],
            [
              "nome" => "Razão Social",
              "referencia" => "NFe/infNFe/dest/xNome",
              "coluna_id" => null,
              "referencia_campo" => null,
            ],
            [
              "nome" => "Valor ICMS",
              "referencia" => "NFe/infNFe/det/imposto/ICMS/ICMS20/vICMS",
              "coluna_id" => null,
              "referencia_campo" => null,
            ],
            [
              "nome" => "CST ICMS",
              "referencia" => "NFe/infNFe/det/imposto/ICMS/ICMS00/CST",
              "coluna_id" => null,
              "referencia_campo" => null,
            ],
            [
              "nome" => "UF Origem",
              "referencia" => "NFe/infNFe/emit/enderEmit/UF",
              "coluna_id" => null,
              "referencia_campo" => null,
            ],
            [
              "nome" => "UF Destino",
              "referencia" => "NFe/infNFe/dest/enderDest/UF",
              "coluna_id" => null,
              "referencia_campo" => null,
            ],
            [
              "nome" => "NCM",
              "referencia" => "NFe/infNFe/det/prod/NCM",
              "coluna_id" => null,
              "referencia_campo" => "ncm",
            ],
            [
              "nome" => "IA",
              "referencia" => null,
              "coluna_id" => null,
              "referencia_campo" => null,
            ],
        ];

        Coluna::insert($itens);
    }
}
