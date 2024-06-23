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
        Schema::create('lbtaxufs', function (Blueprint $table) {
            $table->id('id');
            $table->string('uf', 2);
            $table->string('imposto',10);
            $table->string('ordem', 3);
            $table->string('legislacao', 30);
            $table->timestamps();

            $table->unique(['ordem']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('lbtaxufs');
    }
};
