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
        Schema::create('lbtaxs', function (Blueprint $table) {
            $table->id('id');
            $table->string('iafis', 40);
            $table->integer('aplica');
            $table->string('icms', 1);
            $table->string('icmsst', 1);
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
        Schema::drop('lbtaxs');
    }
};
