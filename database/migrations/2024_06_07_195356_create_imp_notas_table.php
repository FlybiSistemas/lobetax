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
        Schema::create('imp_notas', function (Blueprint $table) {
            $table->id('id');
            $table->string('nItem',2);
            $table->text('xml')->nullable()->comment('Arquivo xml da nota');
            $table->string('arquivo');
            $table->string('aprovada', 1)->default('N');
            $table->timestamps();
            $table->unique(['arquivo', 'nItem']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('imp_notas');
    }
};
