<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class UsuarioController extends Controller
{
    //
    public function index(){      
        return ['usuarios' => User::where('tipo_usuario', 2)->orderBy('nombre', 'desc')->get()];

    }

    public function crearOactualizar(Request $request){
        $usuario = null;
        $url_imagenes = array("foto_uno_url", "foto_dos_url", "foto_tres_url", "foto_cuatro_url", "foto_cinco_url", "foto_seis_url", "foto_siete_url", "foto_ocho_url", "foto_nueve_url", "foto_diez_url", "foto_once_url", "foto_doce_url");

        if($request->accion == 1){
            $usuario = User::create(
                [   'nombre' => $request->nombre, 
                    'usuario' => $request->usuario,
                    'telefono' => $request->telefono,
                    'edad' => $request->edad,  
                    'nacionalidad' => $request->nacionalidad, 
                    'password' => Hash::make($request->clave),
                    'altura' => $request->altura,
                    'busto' => $request->busto,
                    'cintura' => $request->cintura,
                    'caderas' => $request->caderas, 
                    'descripcion' => $request->descripcion]
            );
        } else {
            $usuario = User::updateOrCreate(
                ['id' => $request->usuario_id],
                ['nombre' => $request->nombre, 
                    'telefono' => $request->telefono,
                    'edad' => $request->edad,  
                    'nacionalidad' => $request->nacionalidad, 
                    'password' => Hash::make($request->clave),
                    'altura' => $request->altura,
                    'busto' => $request->busto,
                    'cintura' => $request->cintura,
                    'caderas' => $request->caderas, 
                    'descripcion' => $request->descripcion]
            );

            if($request->clave != '' || $request->clave != null){
                $usuario = User::updateOrCreate(
                    ['id' => $request->usuario_id],
                    ['password' => Hash::make($request->clave)]
                );
            }
        }

        if ($request->hasFile('imagen_perfil')) {
            $foto_perfil = $request->file('imagen_perfil');
            $nombre = $usuario->id . '-1.' . $request->file('imagen_perfil')->getClientOriginalExtension();
            
            if($usuario->perfil_url != null) { Storage::disk('public')->delete($usuario->perfil_url); }
            
            $url = Storage::disk('public')->putFileAs(
                'fotos_perfil', $foto_perfil, $nombre, 'public'
            );

            $usuario = User::updateOrCreate(['id' => $usuario->id], ['perfil_url' => $url]);
        }  

        if ($request->hasFile('video')) {
            $video = $request->file('video');
            $nombre = $usuario->id . '-1.' . $request->file('video')->getClientOriginalExtension();
            
            if($usuario->video_url != null) { Storage::disk('public')->delete($usuario->video_url); }
            
            $url = Storage::disk('public')->putFileAs(
                'videos', $video, $nombre, 'public'
            );

            $usuario = User::updateOrCreate(['id' => $usuario->id], ['video_url' => $url]);
        }  

        for ($i=0; $i < count($url_imagenes); $i++) { 
            if ($request->hasFile('foto_' . ($i + 1))) {
                $foto_galeria = $request->file('foto_' . ($i + 1));
                $nombre = $usuario->id . '-' . ($i+ 1) . '.' . $request->file('foto_' . ($i + 1))->getClientOriginalExtension();
                
                if($usuario[$url_imagenes[$i]] != null) { Storage::disk('public')->delete($usuario[$url_imagenes[$i]]); }

                $url = Storage::disk('public')->putFileAs(
                    'fotos_galeria', $foto_galeria, $nombre, 'public'
                );
        
                $usuario = User::updateOrCreate(['id' => $usuario->id], [ $url_imagenes[$i] => $url]);
            }
        }
    }
}
