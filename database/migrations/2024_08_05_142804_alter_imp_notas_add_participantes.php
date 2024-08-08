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
        Schema::table('imp_notas', function(Blueprint $table){
            $table->foreignId('emit_id')->nullable()->constrained('participantes')->references('id')->onDelete('set null');
            $table->foreignId('dest_id')->nullable()->constrained('participantes')->references('id')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropColumns('imp_notas', ['emit_id', 'dest_id']);
    }
};
