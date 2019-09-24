<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre','telefono', 'edad', 'usuario', 'sexo', 'nacionalidad', 'password','altura', 'busto', 'cintura', 'caderas', 'descripcion', 'tipo_usuario', 'perfil_url', 'foto_uno_url', 'foto_dos_url', 'foto_tres_url', 'foto_cuatro_url', 'foto_cinco_url', 'foto_seis_url', 'foto_siete_url', 'foto_ocho_url', 'foto_nueve_url', 'foto_diez_url', 'foto_once_url', 'foto_doce_url', 'video_url'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function getFotosAttribute(){
        $fotos = array();

        if($this->foto_uno_url != null) array_push($fotos, $this->foto_uno_url);
        if($this->foto_dos_url != null) array_push($fotos, $this->foto_dos_url);
        if($this->foto_tres_url != null) array_push($fotos, $this->foto_tres_url);
        if($this->foto_cuatro_url != null) array_push($fotos, $this->foto_cuatro_url);
        if($this->foto_cinco_url != null) array_push($fotos, $this->foto_cinco_url);
        if($this->foto_seis_url != null) array_push($fotos, $this->foto_seis_url);
        if($this->foto_siete_url != null) array_push($fotos, $this->foto_siete_url);
        if($this->foto_ocho_url != null) array_push($fotos, $this->foto_ocho_url);
        if($this->foto_nueve_url != null) array_push($fotos, $this->foto_nueve_url);
        if($this->foto_diez_url != null) array_push($fotos, $this->foto_diez_url);
        if($this->foto_once_url != null) array_push($fotos, $this->foto_once_url);
        if($this->foto_doce_url != null) array_push($fotos, $this->foto_doce_url);
        
        return $fotos;
    }

}
