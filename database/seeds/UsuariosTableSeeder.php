<?php

use Illuminate\Database\Seeder;

class UsuariosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create(['nombre' => 'Administrador', 'usuario' => 'admin@clubvip.cl', 'password' => bcrypt('123456789'), 'tipo_usuario' => 1]);
        User::create(['nombre' => 'Administrador', 'usuario' => 'carlosandresfavoritos@gmail.com', 'password' => bcrypt('favoritosandrescarlos'), 'tipo_usuario' => 1]);
    }
}
