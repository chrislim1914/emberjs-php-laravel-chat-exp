<?php

class ChatController extends BaseController {
	public function index()	{
		$pollDate = Input::get('pollDate');
		if ($pollDate) {
			$date = strtotime($pollDate);
			$datetime = date('Y-m-d H:i:s', $date);
			$chats = Chat::where('created_at', '>', $datetime)->get();
			$users = [];
			foreach($chats as $chat) {
				$chat->user = $chat->user_id;
				$user = User::find($chat->user_id);
				array_push($users, $user);
				unset($chat->user_id);
			}
			sleep(2);
			return Response::json(['chats'=>$chats, 'users'=>$users]);
		}
		$chats = Chat::orderBy('created_at', 'DESC')->take(10)->get();
		$users = [];
		foreach($chats as $chat) {
			$chat->user = $chat->user_id;
			$user = User::find($chat->user_id);
			array_push($users, $user);
			unset($chat->user_id);
		}
		return Response::json(['chats'=>$chats, 'users'=>$users]);
	}
	public function store() {
		$data = Input::get('chat');
		$chat = Chat::create($data);
		$chat->user_id = $data['user'];
		$chat->save();
		return Response::json(compact('chat'), 201);
	}
	public function show($id) {
		$chat = Chat::find($id);
		$chat->user = $chat->user_id;
		$user = User::find($chat->user_id);
		unset($chat->user_id);
		return Response::json(['chat'=>$chat, 'user'=>$user]);
	}
	public function update($id) {
		/*
		$data = Input::get('chat');
		$chat = Chat::find($id);
		$chat->message = $data->message;
		$chat->user()
		$chat = Chat::create($data);
		$chat->save();
		return Response::json(compact('chat'), 201);
		*/
		return Response::make("response");
	}
	public function destroy($id) {
		return Response::make("response");
	}
}