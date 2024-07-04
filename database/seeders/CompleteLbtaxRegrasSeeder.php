<?php

namespace Database\Seeders;

use App\Models\Lbtax;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CompleteLbtaxRegrasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $itens = Lbtax::all();

        foreach ($itens as $item) {
            $iafis = $item->iafis;
            $count = substr_count($iafis, '|');
        
            if ($count < 23) {
                $difference = 23 - $count;
                $item->iafis .= str_repeat('S|', $difference);
            }

            $item->save();
        }
    }
}
