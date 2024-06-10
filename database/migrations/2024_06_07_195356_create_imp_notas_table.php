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
        Schema::create('imp_notas', function (Blueprint $table) {
            $table->id('id');
            $table->text('xml')->nullable()->comment('Arquivo xml da nota');
            $table->string('arquivo');
            $table->integer('ide_cuf');
            $table->integer('ide_cnf');
            $table->unsignedInteger('ide_iddest')->nullable()->comment("Tipo Operacao: 1=Interna|2=Interestadual|3=Exterior");
            $table->unsignedInteger('ide_mod')->nullable()->comment("Modelo da Nota: 55=NFe|65=NFCe");
            $table->unsignedInteger('ide_finnfe')->nullable()->comment("Finalidade da Nota: 1=Normal|2=Complementar|3=Ajuste|4=Devolucao");
            $table->string('ide_natop', 255)->nullable()->comment("Texto da Natureza da Operação");
            $table->timestamp('data_hora_emissao');
            $table->integer('ide_cmunfg')->nullable();
            $table->string('emit_cnpj', 15)->nullable();
            $table->string('emit_xnome');
            $table->string('emit_xfant')->nullable();
            $table->string('emit_xlgr')->nullable();
            $table->string('emit_nro', 10)->nullable();
            $table->string('emit_xcpl')->nullable();
            $table->string('emit_xbairro')->nullable();
            $table->integer('emit_cmun')->nullable();
            $table->string('emit_xmun')->nullable();
            $table->string('emit_uf', 2)->nullable();
            $table->string('emit_cep', 10)->nullable();
            $table->integer('emit_cpais')->nullable();
            $table->string('emit_xpais')->nullable();
            $table->string('emit_fone', 16)->nullable();
            $table->string('emit_ie', 30)->nullable();
            $table->unsignedInteger('emit_crt')->nullable()->comment("Codigo Regime Tributario. 1=Simples Nacional|2=Simples Nacional excesso sublimite de receita bruta|3=Regime Normal");
            $table->string('dest_cnpj', 15);
            $table->string('dest_xnome');
            $table->string('dest_xfant')->nullable();
            $table->string('dest_xlgr')->nullable();
            $table->string('dest_nro', 10)->nullable();
            $table->string('dest_xcpl')->nullable();
            $table->string('dest_xbairro')->nullable();
            $table->integer('dest_cmun')->nullable();
            $table->string('dest_xmun')->nullable();
            $table->string('dest_uf', 2)->nullable();
            $table->string('dest_cep', 10)->nullable();
            $table->integer('dest_cpais')->nullable();
            $table->string('dest_xpais')->nullable();
            $table->string('dest_fone', 16)->nullable();
            $table->string('dest_ie', 30)->nullable();
            $table->integer('qtde_itens')->nullable();
            $table->decimal('total', 15, 2)->nullable();
            $table->text('inf_adic')->nullable();
            $table->string('aprovada', 1)->default('N');
            $table->decimal('vfrete', 15, 2)->nullable()->comment("Valor do frete da nota quando houver");
            $table->timestamps();
        });

        Schema::create('imp_nota_itens', function (Blueprint $table) {
            $table->id('id');
            $table->string('cprod', 50);
            $table->string('xprod');
            $table->string('cean', 20)->nullable();
            $table->bigInteger('ncm')->nullable();
            $table->bigInteger('cest')->nullable();
            $table->integer('cfop')->nullable();
            $table->decimal('qcom', 15, 4)->nullable();
            $table->string('ucom', 10)->nullable();
            $table->decimal('vuncom', 15, 4)->nullable();
            $table->decimal('vprod', 15, 4)->nullable();
            $table->bigInteger('med_cprodanvisa')->nullable();
            $table->decimal('med_vpmc', 15, 4)->nullable();
            $table->string('icms_cst', 3)->nullable()->comment("ICMS CST. 00, 10, 20, 30, ..., N");
            $table->unsignedInteger('icms_origem')->nullable()->comment("Origem do Produto: 0,3,4,5,8=Nacional|1,2,6,7=Estrangeira");
            $table->decimal('icms_base_calculo', 15, 2)->nullable();
            $table->decimal('icms_percentual', 7, 4)->nullable();
            $table->decimal('icms_valor', 15, 2)->nullable();
            $table->decimal('vdesc', 15, 2)->nullable();
            $table->decimal('vtottrib', 15, 2)->nullable();
            $table->unsignedInteger('indtot')->nullable()->comment("Indica se o produto compoe o total da nota ou nao. 0=Nao|1=Sim");
            $table->decimal('icms_vicmsdeson', 15, 2)->nullable();
            $table->integer('icms_motdes')->nullable();
            $table->decimal('icms_predbc', 15, 2)->nullable();
            $table->string('ipi_clenq', 5)->nullable();
            $table->string('ipi_cnpjprod', 14)->nullable();
            $table->string('ipi_cselo', 60)->nullable();
            $table->string('ipi_qselo', 12)->nullable();
            $table->string('ipi_cenq', 3)->nullable();
            $table->string('ipi_cst', 2)->nullable();
            $table->decimal('ipi_vbc', 15, 2)->nullable();
            $table->decimal('ipi_pipi', 7, 4)->nullable();
            $table->decimal('ipi_qunid', 16, 4)->nullable();
            $table->decimal('ipi_vunid', 15, 4)->nullable();
            $table->decimal('ipi_vipi', 15, 2)->nullable();
            $table->decimal('ii_vbc', 15, 2)->nullable();
            $table->decimal('ii_vdespadu', 13, 2)->nullable();
            $table->decimal('ii_vii', 15, 2)->nullable();
            $table->decimal('ii_viof', 15, 2)->nullable();
            $table->string('pis_cst', 2)->nullable();
            $table->decimal('pis_vbc', 15, 2)->nullable();
            $table->decimal('pis_ppis', 7, 4)->nullable();
            $table->decimal('pis_vpis', 15, 2)->nullable();
            $table->decimal('pis_qbcprod', 16, 4)->nullable();
            $table->decimal('pis_valiqprod', 15, 4)->nullable();
            $table->string('cofins_cst', 2)->nullable();
            $table->decimal('cofins_vbc', 15, 2)->nullable();
            $table->decimal('cofins_pcofins', 7, 4)->nullable();
            $table->decimal('cofins_vcofins', 15, 2)->nullable();
            $table->decimal('cofins_qbcprod', 16, 4)->nullable();
            $table->decimal('cofins_valiqprod', 15, 4)->nullable();
            $table->decimal('voutro', 13, 2)->nullable();
            $table->decimal('vfrete', 13, 2)->nullable();
            $table->decimal('vseg', 13, 2)->nullable();
            $table->timestamps();

            $table->foreignId('imp_nota_id')->constrained('imp_notas');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('imp_nota_itens');
        Schema::dropIfExists('imp_notas');
    }
};
