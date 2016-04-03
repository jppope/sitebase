@extends('layouts.app')

@section('content')
    <div class="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium" >
        <button class="menu-icon" type="button" data-toggle></button>
        <div class="title-bar-title">Menu</div>
    </div>
       <div class="container">
        <div class="row">
            <br>
            <br>
            <form action="/pages" method="post">
                {{ csrf_field() }}
                <div class="columns small-6">
                   <input type="hidden" name="template">
                   <label>Title
                   <input type="text" name="title">
                   </label>
                   <label>Main Body</label>
                   <textarea id="main-content" name="body">Easy (and free!) You should check out our premium features.</textarea>
                    <br>
                   <button class="button large pull-right">Submit</button>
                </div>
                <div class="columns small-6">
                    <label>Hero Image/ Primary Image
                        <input type="text" name="img">
                    </label>
                    <label>Focus / Key Points Text</label>
                    <textarea id="focus" name="focus"> These are keypoints</textarea>
                    <label>Extra text
                    <input type="text" name="extra">
                    </label>
                </div>
            </form>

        </div>
    </div>
@endsection
