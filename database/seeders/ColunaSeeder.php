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
              "formatacao" => null,
              "coluna_id" => null,
              "referencia_campo" => null,
              "tipo_coluna" => "r",
              "ordem" => 1,
            ],
            [
              "nome" => "Descrição",
              "referencia" => "NFe/infNFe/det/prod/xProd",
              "formatacao" => null,
              "coluna_id" => null,
              "referencia_campo" => null,
              "tipo_coluna" => "r",
              "ordem" => 2,
            ],
            [
              "nome" => "Valor Produto",
              "referencia" => "NFe/infNFe/det/prod/vProd",
              "formatacao" => null,
              "coluna_id" => null,
              "referencia_campo" => null,
              "tipo_coluna" => "r",
              "ordem" => 3,
            ],
            [
              "nome" => "Razão Social",
              "referencia" => "NFe/infNFe/dest/xNome",
              "formatacao" => null,
              "coluna_id" => null,
              "referencia_campo" => null,
              "tipo_coluna" => "r",
              "ordem" => 4,
            ],
            [
              "nome" => "Valor ICMS",
              "referencia" => "NFe/infNFe/det/imposto/ICMS/ICMS20/vICMS",
              "formatacao" => null,
              "coluna_id" => null,
              "referencia_campo" => null,
              "tipo_coluna" => "r",
              "ordem" => 5,
            ],
            [
              "nome" => "CST ICMS",
              "referencia" => "NFe/infNFe/det/imposto/ICMS/ICMS00/CST",
              "formatacao" => null,
              "coluna_id" => null,
              "referencia_campo" => null,
              "tipo_coluna" => "r",
              "ordem" => 6,
            ],
            [
              "nome" => "UF Origem",
              "referencia" => "NFe/infNFe/emit/enderEmit/UF",
              "formatacao" => null,
              "coluna_id" => null,
              "referencia_campo" => null,
              "tipo_coluna" => "r",
              "ordem" => 7,
            ],
            [
              "nome" => "UF Destino",
              "referencia" => "NFe/infNFe/dest/enderDest/UF",
              "formatacao" => null,
              "coluna_id" => null,
              "referencia_campo" => null,
              "tipo_coluna" => "r",
              "ordem" => 8,
            ],
            [
              "nome" => "NCM",
              "referencia" => "NFe/infNFe/det/prod/NCM",
              "formatacao" => "0000.00.00",
              "coluna_id" => null,
              "referencia_campo" => "ncm",
              "tipo_coluna" => "r",
              "ordem" => 9,
            ],
            [
              "nome" => "IA",
              "referencia" => null,
              "formatacao" => null,
              "coluna_id" => null,
              "referencia_campo" => null,
              "tipo_coluna" => "",
              "ordem" => 10,
            ],
        ];

        Coluna::insert($itens);
    }
}
