<?php

namespace App\Http\Controllers;



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;

class DashboardController extends Controller
{
    public function index() {
        if(Auth::user()->hasRole('user')) {
            return view('userdash');
        } elseif (Auth::user()->hasRole('trainer')) {
            return view('trainerdash');
        } elseif (Auth::user()->hasRole('admin')) {
            return view('dashboard');
        }
    }

    public function showusers() {
        return view('dashboard.users');
    }

    public function userprofile() {
        return view('user.profile');
    }


    public function userlivestreams() {
        
        $response = Http::get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwrXi5ZknKThspJc-Gai04g&maxResults=10&key=AIzaSyAJqrPpe8fI5JUsrark2I93gv6Je0pmNJk')['items'];
        return view('user.livestreams', ['response' => $response]);
    }
}
