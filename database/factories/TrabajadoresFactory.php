<?php

namespace Database\Factories;
use App\Models\Trabajadores;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Trabajadores>
 */
class TrabajadoresFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombre'=>$this->faker->name,
            'apellido'=>$this->faker->text(15),
            'dni' =>$this->faker->text(15),
            'telefono' =>$this->faker->text(15),
            'direccion' =>$this->faker->text(15),
            'cargo' =>$this->faker->text(15),
            'fecha_de_incorporacion' =>$this->faker->text(15),
        ];
    }
}
