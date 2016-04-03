<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700" rel='stylesheet' type='text/css'>
    <link href="http://www.alohaeditor.org/assets/demo.css" rel="stylesheet" type="text/css">
    <!-- Styles -->
    <link href="/css/app.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Lato';
        }
    </style>
</head>
<body id="app-layout">

<div class="title-bar" data-responsive-toggle="main-menu" data-hide-for="medium">
    <button class="menu-icon" type="button" data-toggle></button>
    <div class="title-bar-title">Menu</div>
</div>

<div class="top-bar" id="main-menu">
    <div class="top-bar-left">
        <ul class="dropdown menu" data-dropdown-menu>
            <li class="menu-text">Site Title</li>
        </ul>
    </div>
    <div class="top-bar-right">
        <ul class="menu" data-responsive-menu="medium-dropdown">
            <li class="">
                <a href="#">One</a>
                <ul class=" menu vertical" data-submenu>
                    <li><a href="#">One</a></li>
                    <li><a href="#">Two</a></li>
                    <li><a href="#">Three</a></li>
                </ul>
            </li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
            <li><a class="hollow button" href="/login">Login</a> </li>
        </ul>
    </div>
</div>

    @yield('content')

    <!-- JavaScripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="/js/all.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.1.2/foundation.js"></script>
    <script src="/js/motion-ui.js"></script>
    <script src="/js/what-input.js"></script>
    <script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
    <script src="/js/app.js"></script>
    <script>
        $(document).foundation();

        tinymce.init({ selector:'#main-content'});
        tinymce.init({ selector:'#focus'});
    </script>

</body>
</html>
