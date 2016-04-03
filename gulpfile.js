var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
});


elixir(function (mix) {
 mix.scriptsIn('resources/assets/js/libraries');
 mix.scripts(['motion-ui/motion-ui.js'], 'public/js/motion-ui.js');
 mix.scripts(['what-input/what-input.js'], 'public/js/what-input.js');
 mix.scriptsIn('resources/assets/js/scripts');
 mix.scripts(['app.js'], 'public/js/app.js');
});