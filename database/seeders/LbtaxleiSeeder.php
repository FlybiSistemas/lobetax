<?php

namespace Database\Seeders;

use App\Models\Lbtaxlei;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LbtaxleiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $itens = [
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000142DE08BR0001', 'bsl' => 'Convênio 142/2018 ICMS ST', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000022DE08BR0001', 'bsl' => 'Protocolo 22/2008 autopecas CE e SP', 'chave' => 'SNSSNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000041DE08BR0001', 'bsl' => 'Protocolo 41/2008 autopecas', 'chave' => 'SNSSNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000097DE10BR0001', 'bsl' => 'Protocolo 97/2010 autopecas', 'chave' => 'SSSSNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000129DE10BR0001', 'bsl' => 'Protocolo 129/2010 autopecas PE e SP', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000158DE09BR0001', 'bsl' => 'Protocolo 158/2009 autopecas MG e RJ', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000105DE11BR0001', 'bsl' => 'Protocolo 105/2011 autopecas MG e RS', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000102DE17BR0001', 'bsl' => 'Convênio 102/2017 pneumaticos', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000029DE09BR0001', 'bsl' => 'Protocolo 29/2009 pneumaticos MG e SP', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000110DE09BR0001', 'bsl' => 'Protocolo 110/2009 pneumaticos BA e SP', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000025DE10BR0001', 'bsl' => 'Protocolo 25/2010 pneumaticos BA e MG', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000133DE10BR0001', 'bsl' => 'Protocolo 133/2010 pneumaticos PE e SP', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000106DE23BR0001', 'bsl' => 'Convênio 106/2023 pneumaticos RO', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000132DE13BR0001', 'bsl' => 'Protocolo 132/2013 pneumaticos RJ e SP', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000203DE09BR0001', 'bsl' => 'Protocolo 203/2009 pneumaticos MG, PR, RJ e SC', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000110DE07BR0001', 'bsl' => 'Convênio 110/2007 lubrificantes', 'chave' => 'SNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000017DE04BR0001', 'bsl' => 'Protocolo 17/2004 lubrificantes', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000195DE19MT0001', 'bsl' => 'Portaria 195/2019 autopeças MT', 'chave' => 'SSSSNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0000052DE91BR0001', 'bsl' => 'Convênio 52/1991 maquinas', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'LEI0004852DE97GO0001', 'bsl' => 'Inciso VIII, Art. 8, Anexo IX, Decreto 4.852/97', 'chave' => 'NNNNNNNSNNNN'],
            ['imposto' => 'ICMSST', 'cod' => 'ICMSSTREGRAGERAL0001', 'bsl' => 'Regra geral de ICMS ST', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMS', 'cod' => 'ICMS00REGRAGERAL0001', 'bsl' => 'Regra geral de ICMS ', 'chave' => 'NNNNNNNNNNNN'],
            ['imposto' => 'ICMS', 'cod' => 'ICMS000001DE99BR0001', 'bsl' => 'Convênio de ICMS 01/99', 'chave' => 'SNNNNNNNNNNN'],
        ];

        Lbtaxlei::insert($itens);
    }
}
