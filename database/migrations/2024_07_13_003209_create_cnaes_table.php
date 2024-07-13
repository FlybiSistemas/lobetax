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
        Schema::create('cnaes', function (Blueprint $table) {
            $table->id();
            $table->string('codigo', 50);
            $table->text('descricao')->nullable();
            $table->string('categoria', 1)->nullable();
            $table->unique('codigo', 'cnae_codigo_uidx');

            $table->index('codigo', 'cnae_codigo_idx');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cnaes');
    }
};
