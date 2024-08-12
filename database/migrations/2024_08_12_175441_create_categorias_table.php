<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categorias', function (Blueprint $table) {
            $table->id();
            $table->string('categoria', 1);
            $table->timestamps();
        });

        Schema::dropColumns('participantes', ['categoria']);

        $array = [
            ['categoria' => 'C'], //'COMERCIO'
            ['categoria' => 'I'], //'INDUSTRIA'
            ['categoria' => 'M'], //'IMOVEIS'
            ['categoria' => 'S'], //'SERVIÇOS'
            ['categoria' => 'T'], //'TRANSPORTE'
        ];

        DB::table('categorias')->insert($array);

        Schema::create('categoria_participantes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('categoria_id');
            $table->foreignId('participantes_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categorias');
        Schema::dropIfExists('categoria_participantes');
    }
};
