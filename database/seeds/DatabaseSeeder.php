<?php

use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //$this->call(UsuariosTableSeeder::class);

        User::create(['nombre' => 'Administrador', 'usuario' => 'admin@clubvip.cl', 'password' => bcrypt('123456789'), 'tipo_usuario' => 1]);
        User::create(['nombre' => 'Administrador', 'usuario' => 'carlosandresfavoritos@gmail.com', 'password' => bcrypt('favoritosandrescarlos'), 'tipo_usuario' => 1]);
    }
}
