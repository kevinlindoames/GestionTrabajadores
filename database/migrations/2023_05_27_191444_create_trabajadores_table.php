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
        Schema::create('trabajadores', function (Blueprint $table) {
            $table->id();
            $table->string('nombre' , 50);
            $table->string('apellido' , 50);
            $table->string('dni' , 50);
            $table->string('telefono' , 50);
            $table->string('direccion' , 50);
            $table->string('cargo' , 50);
            $table->string('fecha_de_incorporacion' , 50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trabajadores');
    }
};
