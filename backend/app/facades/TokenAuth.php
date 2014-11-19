<?php
// http://superuser.my/create-custom-facade-laravel-4/

use Illuminate\Support\Facades\Facade;

class TokenAuth extends Facade 
{
	protected static function getFacadeAccessor() 
	{
		return 'TokenAuthAlias'; // seems like it's a singleton
		//return App::make('TokenAuthAlias');
	}
}