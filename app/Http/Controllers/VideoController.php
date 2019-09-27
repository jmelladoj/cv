<?php

namespace App\Http\Controllers;

use App\Video;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class VideoController extends Controller
{
    public function index($id){      
        return ['videos' => Video::where('user_id',  $id)->orderBy('titulo', 'desc')->get()];

    }

    public function crearVideoPagina(Request $request)
    {   
        if ($request->hasFile('video')) {
            Video::create(
                [   'titulo' => $request->titulo, 
                    'video_url' => Storage::disk('public')->putFile('videos_pagina', $request->file('video')),
                    'user_id' => \Auth::user()->id]
            );
        } 
    }

    public function borrar(Request $request){
        $video = Video::findOrFail($request->id);
        Storage::disk('public')->delete($video->video_url);
        $video->delete();
    }
}
