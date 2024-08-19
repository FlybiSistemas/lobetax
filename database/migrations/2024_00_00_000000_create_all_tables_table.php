<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        // criar usuario com email suporte@flybisistemas.com.br e senha suporte
        DB::table('users')->insert([
            'name' => 'Suporte',
            'email' => 'suporte@flybisistemas.com.br',
            'password' => Hash::make('suporte'),
        ]);

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('failed_jobs', function (Blueprint $table) {
            $table->id();
            $table->string('uuid')->unique();
            $table->text('connection');
            $table->text('queue');
            $table->longText('payload');
            $table->longText('exception');
            $table->timestamp('failed_at')->useCurrent();
        });

        // Schema::create('personal_access_tokens', function (Blueprint $table) {
        //     $table->id();
        //     $table->morphs('tokenable');
        //     $table->string('name');
        //     $table->string('token', 64)->unique();
        //     $table->text('abilities')->nullable();
        //     $table->timestamp('last_used_at')->nullable();
        //     $table->timestamp('expires_at')->nullable();
        //     $table->timestamps();
        // });

        Schema::create('participantes', function (Blueprint $table) {
            $table->id('id');
            $table->string('cnpj', 14);
            $table->string('razao_social', 150);
            $table->string('natureza', 100);
            $table->string('categoria', 1);
            $table->timestamps();
        });

        Schema::create('cnaes', function (Blueprint $table) {
            $table->id();
            $table->string('codigo', 50);
            $table->text('descricao')->nullable();
            $table->string('categoria', 1)->nullable();
            $table->string('contribuinte', 1)->nullable();
            $table->unique('codigo', 'cnae_codigo_uidx');

            $table->index('codigo', 'cnae_codigo_idx');
            $table->timestamps();
        });

        Schema::create('cnae_participantes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cnae_id');
            $table->foreignId('participantes_id');
            $table->timestamps();
        });

        Schema::create('imp_notas', function (Blueprint $table) {
            $table->id('id');
            $table->string('nItem',2);
            $table->text('xml')->nullable()->comment('Arquivo xml da nota');
            $table->string('arquivo');
            $table->string('aprovada', 1)->default('N');
            $table->timestamps();
            $table->unique(['arquivo', 'nItem']);

            $table->foreignId('emit_id')->nullable()->constrained('participantes')->references('id')->onDelete('set null');
            $table->foreignId('dest_id')->nullable()->constrained('participantes')->references('id')->onDelete('set null');
        });

        Schema::create('colunas', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('referencia')->nullable();
            $table->string('formatacao')->nullable();
            $table->integer('ordem');
            $table->string('referencia_campo', 10)->nullable();
            $table->foreignId('coluna_id')->nullable();

            $table->foreignId('coluna_id2')->nullable()->constrained('colunas')->references('id');
            $table->string('tipo_coluna', 1)->default('r');
            $table->string('model_name', 20)->nullable();
            $table->string('buscar_name', 20)->nullable();
            $table->string('comparacao', 150)->nullable();
            $table->string('subrelacao_name', 20)->nullable();
            $table->string('verdadeiro', 20)->nullable();
            $table->string('falso', 20)->nullable();

            $table->string('subrelacao_extra', 20)->nullable();
            $table->string('parametro_extra', 20)->nullable();
            
            $table->timestamps();
        });

        Schema::create('tabelas', function (Blueprint $table) {
            $table->id('id');
            $table->string('nome', 15);
            $table->timestamps();
        });

        Schema::create('lbtaxufs', function (Blueprint $table) {
            $table->id('id');
            $table->string('uf', 2);
            $table->string('imposto',10);
            $table->string('ordem', 3);
            $table->string('legislacao', 30);
            
            $table->unique(['ordem', 'imposto']);
            $table->timestamps();
        });

        Schema::create('lbtaxleis', function (Blueprint $table) {
            $table->id('id');
            $table->string('imposto', 20);
            $table->string('cod', 20);
            $table->string('bsl', 50);
            $table->string('chave', 20);
            $table->timestamps();
        });

        Schema::create('lbtaxs', function (Blueprint $table) {
            $table->id('id');
            $table->string('iafis', 150);
            $table->integer('aplica');
            $table->string('icms', 1);
            $table->string('icmsst', 1);
            $table->timestamps();
        });

        Schema::create('referencias', function (Blueprint $table) {
            $table->id();
            $table->string('referencia', 100);
            $table->timestamps();
        });

        Schema::create('coluna_referencias', function (Blueprint $table) {
            $table->id();
            $table->foreignId('referencia_id');
            $table->foreignId('coluna_id');
            $table->timestamps();
        });

        Schema::create('lbtaxfulls', function (Blueprint $table) {
            $table->id('id');
            $table->string('chave');
            $table->string('imposto', 3);
            $table->string('chave_lei');
            $table->string('descricao');
            $table->string('tipo_campo');
            $table->string('chave_campo');
            $table->string('descricao_chave_campo');
            $table->string('info', 10);
            $table->timestamps();
        });
        Schema::create('coluna_tabela', function (Blueprint $table) {
            $table->id();
            $table->foreignId('tabela_id');
            $table->foreignId('coluna_id');
            $table->integer('ordem');
        });

        Schema::create('ncms', function (Blueprint $table) {
            $table->id('id');
            $table->string('codigo');
            $table->string('tipo', 1);
            $table->timestamps();
        });

        Schema::create('cnae_ncm', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cnae_id');
            $table->foreignId('ncm_id');
            $table->timestamps();
        });
        
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

        Schema::create('categorias', function (Blueprint $table) {
            $table->id();
            $table->string('categoria', 1);
            $table->timestamps();
        });

        Schema::dropColumns('participantes', ['categoria']);

        $array = [
            ['categoria' => 'C'], //'COMERCIO'
            ['categoria' => 'I'], //'INDUSTRIA'
            ['categoria' => 'M'], //'IMOVEIS'
            ['categoria' => 'S'], //'SERVIÇOS'
            ['categoria' => 'T'], //'TRANSPORTE'
        ];

        DB::table('categorias')->insert($array);

        Schema::create('categoria_participantes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('categoria_id');
            $table->foreignId('participantes_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categorias');
        Schema::dropIfExists('categoria_participantes');
        Schema::drop('alertas');
        Schema::dropIfExists('cnae_ncm');
        Schema::drop('ncms');
        Schema::dropIfExists('coluna_tabela');
        Schema::drop('lbtaxfulls');
        Schema::dropIfExists('coluna_referencias');
        Schema::dropIfExists('referencias');
        Schema::drop('lbtaxs');
        Schema::drop('lbtaxleis');
        Schema::drop('lbtaxufs');
        Schema::drop('tabelas');
        Schema::dropIfExists('colunas');
        Schema::dropIfExists('imp_notas');
        Schema::dropIfExists('cnae_participantes');
        Schema::dropIfExists('cnaes');
        Schema::drop('participantes');
        // Schema::dropIfExists('personal_access_tokens');
        Schema::dropIfExists('failed_jobs');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('users');
        Schema::dropIfExists('imp_notas');
    }
};
