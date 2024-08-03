<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('colunas', function(Blueprint $table){
            $table->foreignId('coluna_id2')->nullable()->constrained('colunas')->references('id');
            $table->string('tipo_coluna', 1)->default('r');
            $table->string('model_name', 20)->nullable();
            $table->string('buscar_name', 20)->nullable();
            $table->string('subrelacao_name', 20)->nullable();
            $table->string('verdadeiro', 20)->nullable();
            $table->string('falso', 20)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropColumns('colunas', [
            'coluna_id2',
            'tipo_coluna',
            'model_name',
            'buscar_name',
            'subrelacao_name',
            'verdadeiro',
            'falso',
        ]);
    }
};
