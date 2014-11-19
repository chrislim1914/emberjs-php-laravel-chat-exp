<?php

class UserTableSeeder extends Seeder {
	public function run() {
		DB::table('users')->delete();
		DB::table('chats')->delete();
		$user1 = User::create([
				'username' => 'sharavsambuu',
				'email'    => 'sharavsambuu@gmail.com',
				'password' => md5('helloworld')
			]);
		$user2 = User::create([
				'username' => 'mongolian',
				'email'    => 'mongolian@gmail.com',
				'password' => md5('helloworld')
			]);
		Chat::create([
				'message' => 'hello world',
				'user_id' => $user1->id
			]);
		Chat::create([
				'message' => 'another chat',
				'user_id' => $user1->id
			]);
		Chat::create([
				'message' => 'user 2 chat',
				'user_id' => $user2->id
			]);
	}
}
