<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trabajadores extends Model
{
    use HasFactory;
    protected $fillable = ['nombre','apellido','dni','telefono','direccion','cargo','fecha_de_incorporacion' ];

}
