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
        Schema::create('coluna_tabela', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tabela_id');
            $table->foreignId('coluna_id');
            $table->integer('ordem');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coluna_tabela');
    }
};
