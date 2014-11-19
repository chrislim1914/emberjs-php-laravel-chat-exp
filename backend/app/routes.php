<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('hello');
});

Route::group(['prefix'=>'api/v1'], function() {
    Route::resource('auth', 'AuthController', ['only'=>['store']]);
    Route::delete('auth', ['uses' => 'AuthController@destroy']);
    Route::resource('users', 'UserController', ['only'=>['store']]);
});
Route::group(['prefix'=>'api/v1', 'before'=>'auth.token'], function() {
	Route::resource('users', 'UserController', ['only'=>['index', 'show', 'destroy']]);
	Route::resource('chats', 'ChatController', ['only'=>['index', 'show', 'store', 'update']]);
});

Route::get('/authtest', ['before' => 'auth.token', function() {
	return Response::make('Auth works');
}]);
