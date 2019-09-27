<?php

use App\Video;
use App\Http\Resources\Video as VideoResource;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'HomeController@inicio')->name('inicio');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/videos/pagina', function () { 
    return VideoResource::collection(Video::whereIn('user_id', [1,2])->orderBy('created_at', 'DESC')->get());
});

Route::middleware(['auth'])->group(function(){
    Route::get('/usuarios', 'UsuarioController@index');
    Route::post('/usuario/crear/actualizar', 'UsuarioController@crearOactualizar');

    Route::get('/videos/{id}', 'VideoController@index');
    Route::post('/video/crear/pagina', 'VideoController@crearVideoPagina');
    Route::post('/video/borrar', 'VideoController@borrar');
    
});


