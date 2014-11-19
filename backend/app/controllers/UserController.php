<?php

class UserController extends BaseController {
	public function index()	{
		$users = User::get();
		return Response::json(compact('users'));
	}
	public function store() {
		$data = Input::get('user');
		$user = User::create($data);
		$user->password = md5($data['password']);
		$user->save();
		return Response::json(compact('user'), 201);
	}
	public function show($id) {
		$user = User::find($id);
		return Response::json(compact('user'));
	}

	public function update() {
		return Response::make("response");
	}
	public function destroy($id) {
		return Response::make("response");
	}
}
