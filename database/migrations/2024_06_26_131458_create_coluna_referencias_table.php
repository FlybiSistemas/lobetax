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
        Schema::create('referencias', function (Blueprint $table) {
            $table->id();
            $table->string('referencia', 100);
            $table->timestamps();
        });

        Schema::create('coluna_referencias', function (Blueprint $table) {
            $table->id();
            $table->foreignId('referencia_id');
            $table->foreignId('coluna_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('coluna_referencias');
        Schema::dropIfExists('referencias');
    }
};
