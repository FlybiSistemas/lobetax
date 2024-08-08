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
        Schema::create('alertas', function (Blueprint $table) {
            $table->id('id');
            $table->string('model_name', 20)->nullable();
            $table->integer('model_id')->nullable();
            $table->string('descricao', 150)->nullable();
            $table->string('valor', 24)->nullable();
            $table->string('rota', 150)->nullable();
            $table->integer('status')->default(0);
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
        Schema::drop('alertas');
    }
};
