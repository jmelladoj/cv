@extends('layouts.app')

@section('content')
    <div class="row">
        @foreach ($videos as $item)
            <div class="col-md-4">       
                <div class="columns_padding_5">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="{{ asset('storage/' . $item->video_url) }}" allowfullscreen></iframe>
                    </div>
                </div>
            </div>       
        @endforeach
    </div>

    <registrar></registrar>
@endsection
