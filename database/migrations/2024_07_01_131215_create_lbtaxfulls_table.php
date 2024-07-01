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
        Schema::create('lbtaxfulls', function (Blueprint $table) {
            $table->id('id');
            $table->string('chave');
            $table->string('imposto', 3);
            $table->string('chave_lei');
            $table->string('descricao');
            $table->string('tipo_campo');
            $table->string('chave_campo');
            $table->string('descricao_chave_campo');
            $table->string('info', 1);
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
        Schema::drop('lbtaxfulls');
    }
};
