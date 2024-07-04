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
            $table->string('referencia_campo', 10)->nullable();
            $table->string('referencia')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('colunas', function(Blueprint $table){
            $table->dropColumn('referencia_campo');
            $table->string('referencia')->nullable(false)->change();
        });
    }
};
