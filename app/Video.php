<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    //
    protected $table = 'videos';

    protected $fillable = [
        'titulo','video_url', 'user_id'
    ];
}
