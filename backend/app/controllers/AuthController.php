<?php

class AuthController extends BaseController {
    public function store() {
        $user = TokenAuth::login(Input::get('email'), Input::get('password'));
        if ($user) {
            return Response::json(["user"=>$user]);
        }
        return Response::make("Cannot login", 401);
    }
    public function destroy() {
        $user = TokenAuth::logout(Request::header('X-Auth-Token'));
        if ($user) {
            return Response::make("Successfully logged out", 401);
        }
        return Response::make("Not logged in", 401);
    }

}