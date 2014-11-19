<?php
// http://superuser.my/create-custom-facade-laravel-4/

use Illuminate\Support\ServiceProvider;

class TokenAuthServiceProvider extends ServiceProvider
{
	public function register() 
	{
		App::bind('TokenAuthAlias', function() {
			return new TokenAuthClass;
		});
	}
}