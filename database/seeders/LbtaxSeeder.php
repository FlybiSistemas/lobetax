<?php

namespace Database\Seeders;

use App\Models\Lbtax;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LbtaxSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $itens = [
            ['iafis' => '|F|N|ICMSSTREGRAGERAL0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'N'],
            ['iafis' => '|F|I|ICMSSTREGRAGERAL0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'N'],
            ['iafis' => '|D|N|ICMSSTREGRAGERAL0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'N'],
            ['iafis' => '|D|I|ICMSSTREGRAGERAL0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'N'],
            ['iafis' => '|F|N|ICMS00REGRAGERAL0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'N'],
            ['iafis' => '|F|I|ICMS00REGRAGERAL0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'N'],
            ['iafis' => '|D|N|ICMS00REGRAGERAL0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'N'],
            ['iafis' => '|D|I|ICMS00REGRAGERAL0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'N'],
            ['iafis' => '|F|N|LEI0000110DE07BR0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|D|N|LEI0000110DE07BR0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|F|N|LEI0000022DE08BR0001|N|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|N|LEI0000022DE08BR0001|N|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|I|LEI0000022DE08BR0001|N|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|I|LEI0000022DE08BR0001|N|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|N|LEI0000022DE08BR0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|N|LEI0000022DE08BR0001|S|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|I|LEI0000022DE08BR0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|I|LEI0000022DE08BR0001|S|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|N|LEI0000097DE10BR0001|N|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|N|LEI0000097DE10BR0001|N|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|I|LEI0000097DE10BR0001|N|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|I|LEI0000097DE10BR0001|N|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|N|LEI0000097DE10BR0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|N|LEI0000097DE10BR0001|S|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|N|LEI0000097DE10BR0001|S|N|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|I|LEI0000097DE10BR0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|I|LEI0000097DE10BR0001|S|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|N|LEI0000041DE08BR0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|N|LEI0000041DE08BR0001|S|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|I|LEI0000041DE08BR0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|I|LEI0000041DE08BR0001|S|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|D|N|LEI0000041DE08BR0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|D|N|LEI0000041DE08BR0001|S|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|D|I|LEI0000041DE08BR0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|D|I|LEI0000041DE08BR0001|S|N|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|D|I|LEI0000041DE08BR0001|S|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|F|N|LEI0000195DE19MT0001|N|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|N|LEI0000195DE19MT0001|N|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|I|LEI0000195DE19MT0001|N|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|I|LEI0000195DE19MT0001|N|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|N|LEI0000195DE19MT0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|N|LEI0000195DE19MT0001|S|N|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|N|LEI0000195DE19MT0001|S|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|F|I|LEI0000195DE19MT0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|F|I|LEI0000195DE19MT0001|S|S|N|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'A'],
            ['iafis' => '|D|I|LEI0000195DE19MT0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|D|N|LEI0000195DE19MT0001|S|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|D|I|LEI0000195DE19MT0001|N|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|D|N|LEI0000195DE19MT0001|N|S|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|F|N|LEI0000195DE19MT0001|S|N|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
            ['iafis' => '|D|N|LEI0000195DE19MT0001|S|N|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|D|N|LEI0000195DE19MT0001|S|N|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'S', 'icmsst' => 'S'],
            ['iafis' => '|F|I|LEI0000195DE19MT0001|S|N|S|S|S|S|S|S|S|S|S|S|', 'aplica' => 1, 'icms' => 'T', 'icmsst' => 'D'],
        ];

        Lbtax::insert($itens);
    }
}
