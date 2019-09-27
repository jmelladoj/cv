<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {!! SEO::generate() !!}

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" defer>
    <link href="{{ asset('css/pagina.css') }}" rel="stylesheet" id="color-switcher-link" defer>
    <link rel="icon" type="image/png" href="{{ asset('pagina/images/favicon.png') }}">
    
</head>
<body>
    <div id="app">
        <div id="canvas">
            <div id="box_wrapper">
                <div class="header_absolute">
                    <header class="page_header page_header_side vertical_menu_header ds bottom_mask_add">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12 my-0 mx-0 d-flex justify-content-between align-items-center">
                                    <a href="{{ url('/') }}" class="logo">
                                        <img src="{{ asset('pagina/images/logo.png') }}" alt="LOGO - CLUB VIP">
                                    </a>
                                    <span class="header-phone">
                                        <span class="phone"><span class="color-main pr-2">CLUB</span> VIP</span>
                                    </span>
                                    <span class="header-soc">
                                        @guest
											<a href="{{ route('login') }}"><i class="fa fa-user-o" aria-hidden="true"></i></a>
										@else
											<a href="{{ route('login') }}"><i class="fa fa-user-o" aria-hidden="true"></i> {{ Auth::user()->nombre }}</a>
										@endguest	
                                        <span class="toggle_menu toggle_menu_side header-slide toggle_menu_special"><span></span></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="side_header_inner ds">
                            <div class="scrollbar-macosx">
                                <div class="header-side-menu text-left">
                                    <div class="container-fluid c-gutter-0">
                                        <div class="row">
                                            <div class="col-12 ">
                                                <div class="menu-part menu-side-click">
                                                    <!-- main side nav start -->
                                                    <nav class="mainmenu_side_wrapper">
                                                        <ul class="nav menu-click">
                                                            <li class="active"><a href="#inicio">Inicio</a></li>
                                                            <li><a href="#nosotros">Nosotros</a></li>
                                                            <li><a href="#agencia">Agencia</a></li>
                                                        </ul>
                                                    </nav>
                                                    <!-- eof main side nav -->
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="bottom_part">
                                <span class="phone"><span class="color-main pr-1">CLUB</span> VIP</span>
                                <span class="header-soc mt-0">
                                    @guest
                                        <a href="{{ route('login') }}"><i class="fa fa-user-o" aria-hidden="true"></i></a>
                                    @else
                                        <a href="{{ route('login') }}"><i class="fa fa-user-o" aria-hidden="true"></i> {{ Auth::user()->nombre }}</a>
                                    @endguest
                                </span>
                            </div>
                        </div>
                    </header>
                    <section class="page_slider video-bg cover-image ds text-center bottom_mask_subtract">
                        <img src="{{ asset('pagina/images/home_1.jpg') }}" class="" alt="img">
                        <div class="flex-bg ds z-6 s-overlay">
                            <video loop muted id="myVideo">
                                <source src="#" data-src="{{ asset('pagina/images/Comercial_Stock_Models_2018.mp4') }}" data-time="26" type="video/mp4">
                            </video>
                        </div>
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="intro_layers_wrapper">
                                        <div class="intro_layers">
                                            <div class="intro_layer" data-animation="fadeInRight">
                                                <div class="d-inline-block">
                                                    <a href="#agencia" class="btn btn-maincolor btn-block btn-s-16">CHICAS DE LA AGENCIA</a>
                                                    <label class="btn btn-maincolor btn-block">
                                                        TRABAJA CON NOSOTROS <br>
                                                        <a href="https://api.whatsapp.com/send?phone=56974255406&amp;text=Quiero%20trabajar%20con%20ustedes" target="_blank" class="btn btn-maincolor text-center btn-image"><img src="https://image.flaticon.com/icons/svg/134/134937.svg" class="img-button"></a>
                                                        <a href="tel:+56974255406" target="_blank" class="btn btn-maincolor text-center btn-image"><img src="https://image.flaticon.com/icons/svg/134/134951.svg" class="img-button"></a>
                                                    </label>
                                                    <a href="#" class="btn btn-maincolor btn-block">PERFILES CON VIDEO</a>
                                                    <a href="#sesiones" class="btn btn-maincolor btn-block">SESIONES DE FOTOS Y VÍDEOS</a>
                                                    <a href="#avisos" class="btn btn-maincolor btn-block">AVISOS ERÓTICOS</a>
                                                    <a href="#novedades" class="btn btn-maincolor btn-block">NOVEDADES</a>
                                                </div>
                                            </div>
                                        </div> 
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </section>
                </div>

                @yield('content')

                
                <footer class="page_footer ds top_mask_add s-pb-10 s-pt-70 s-pb-md-40 s-pt-md-85 s-pb-xl-140 s-pt-xl-145">
                    <div class="container">
                        <div class="row">
                            <div class="divider-20 d-none d-xl-block"></div>
        
                            <div class="col-12 text-center animate" data-animation="fadeInUp">
        
                                <div class="widget logo">
                                    <img src="{{ asset('pagina/images/logo.png') }}" alt="LOGO - CLUB VIP">
                                </div>
        
                                <div class="widget copyright">
                                    <p>&copy; Copyright <span class="copyright_year">2019</span> Todos los derechos reservados</p>
                                </div>
                            </div>
        
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/pagina.js') }}" defer></script>
        
</body>
</html>
