<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('lbtaxufs', function (Blueprint $table) {
            $table->dropUnique(['ordem', 'imposto']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('lbtaxufs', function (Blueprint $table) {
            $table->unique(['ordem', 'imposto']);
        });
    }
};
