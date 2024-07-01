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
        Schema::table('lbtaxufs', function (Blueprint $table) {
            $table->dropUnique(['ordem']);

            $table->unique(['ordem', 'imposto']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('lbtaxufs', function (Blueprint $table) {
            $table->dropUnique(['ordem', 'imposto']);

            $table->unique(['ordem']);
        });
    }
};
