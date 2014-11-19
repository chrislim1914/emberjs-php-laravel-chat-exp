<?php 
// http://superuser.my/create-custom-facade-laravel-4/
class TokenAuthClass
{
	public function login($email, $password) {
        $user = User::where('email'   , '=', $email)
					->where('password', '=', md5($password))
					->first();
        Log::info('md5 '.md5($password));
        if ($user) {
            Log::info("found....");
            $user->remember_token = str_random(40);
            $user->save();
            return $user;
        }        
        return null;
    }
    public function logout($token) {
		if ($token) {
            $user = User::where('remember_token','=',$token)->first();
            if ($user) {
            	$user->remember_token = "";
            	$user->save();
             	return $user;
            }
            return null;
        }
        return null;
    }
    public function check($token) {
    	if ($token) {
			$user = User::where('remember_token','=',$token)->remember(1)->first(); // cached
            return $user?true:false;
    	}
    	return false;
    }
}