<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lbtaxleis', function (Blueprint $table) {
            $table->id('id');
            $table->string('imposto', 20);
            $table->string('cod', 20);
            $table->string('bsl', 20);
            $table->string('chave', 20);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('lbtaxleis');
    }
};
