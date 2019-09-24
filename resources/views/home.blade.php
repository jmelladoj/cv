@extends('layouts.intranet')

@section('content')
    <div id="main-wrapper">
        <header class="topbar">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-header">
                    <a class="navbar-brand" href="{{ url('/') }}">
                        <b>
                            CV
                        </b>
                        <span>
                            - CLUB VIP
                        </span> 
                    </a>
                </div>

                <div class="navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"> <a class="nav-link nav-toggler d-block d-sm-none waves-effect waves-dark" href="javascript:void(0)"><i class="ti-menu"></i></a> </li>
                        <li class="nav-item"> <a class="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark" href="javascript:void(0)"><i class="icon-menu"></i></a> </li>
                    </ul>
                    
                    <ul class="navbar-nav my-lg-0">
                        <li class="nav-item right-side-toggle"> <a class="nav-link  waves-effect waves-light" href="javascript:void(0)"><i class="ti-user"></i> {{ Auth::user()->nombre }}</a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <aside class="left-sidebar">
            <div class="scroll-sidebar">
                <nav class="sidebar-nav">
                    <ul id="sidebarnav">
                        <li class="nav-small-cap">--- MENÚ</li>
                        <li @click="menu=0"> <a class="waves-effect waves-dark" href="#" aria-expanded="false"><i class="fa fa-users"></i><span class="hide-menu">USUARIOS</span></a></li>
                        <li @click="menu=1"> <a class="waves-effect waves-dark" href="#" aria-expanded="false"><i class="fa fa-play"></i><span class="hide-menu">VÍDEOS</span></a></li>
                        <li> <a class="waves-effect waves-dark" href="{{ route('logout') }}" aria-expanded="false" onclick="event.preventDefault();document.getElementById('logout-form').submit();"><i class="fa fa-sign-out"></i> <span class="hide-menu">CERRAR SESIÓN</span> </a><form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form></li>
                    </ul>
                </nav>
            </div>
        </aside>
    
        <template v-if="menu==0">
            <usuarios></usuarios>
        </template>
    
        <template v-if="menu==1">
            <videos></videos>
        </template>

        <footer class="footer text-center">
            Placer Conce 2019 ©. Todos los derechos reservados.
        </footer>
    </div>
@endsection
