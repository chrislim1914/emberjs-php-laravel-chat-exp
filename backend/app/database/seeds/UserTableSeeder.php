<?php

class UserTableSeeder extends Seeder {
	public function run() {
		DB::table('users')->delete();
		User::create([
				'username' => 'sharavsambuu',
				'email'    => 'sharavsambuu@gmail.com',
				'password' => md5('helloworld')
			]);
		User::create([
				'username' => 'mongolian',
				'email'    => 'mongolian@gmail.com',
				'password' => md5('helloworld')
			]);
	}
}