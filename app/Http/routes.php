<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::group(['middleware' => ['web']], function () {

    Route::get('pages','PagesController@index');
    Route::post('pages','PagesController@store');
    Route::get('pages/create','PagesController@create');
    Route::delete('pages/{id}','PagesController@destroy');
    Route::get('/pages/{title}','PagesController@title');

});

Route::group(['middleware' => 'web'], function () {

    Route::auth();
    Route::get('/home', 'HomeController@index');

});
