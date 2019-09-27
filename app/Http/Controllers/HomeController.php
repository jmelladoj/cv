<?php

namespace App\Http\Controllers;

use App\Video;
use Illuminate\Http\Request;
use SEO;
use SEOMeta;
use OpenGraph;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        SEO::setTitle('Las mejores escort de Concepción - ClubVip.cl');
        SEO::setDescription('Las mejores escort, escorts, prostitutas, putas y damas de compañia de concepcion te esperan');
        SEO::opengraph()->setUrl('https://www.clubvip.cl/');
        SEO::setCanonical('https://www.clubvip.cl/');
        SEOMeta::addKeyword(['escort', 'escorts', 'prostitutas' , 'damas de compañia', 'concepcion', 'escort concepcion', 'escorts en concepcion', 'postitutas en concepcion', 'damas de compañia en concepcion', 'conce']);

        OpenGraph::setDescription('Las mejores escort, escorts, prostitutas, putas y damas de compañia de concepcion te esperan');
        OpenGraph::setTitle('Las mejores escort de Concepción - ClubVip.cl');
        OpenGraph::setUrl('https://www.clubvip.cl/');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {   
        return view('home');
    }

    public function inicio(){
        $videos = Video::whereIn('user_id', [1,2])->orderBy('created_at', 'DESC')->get();
        return view('inicio')->with(compact('videos'));
    }
}
