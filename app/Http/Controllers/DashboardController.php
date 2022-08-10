<?php

namespace App\Http\Controllers;



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Models\UserHealthInfo;

class DashboardController extends Controller
{
    public function index() {

        $id = Auth::user()->id;
        $profile = UserHealthInfo::where('user_id', $id)->first();


        if(Auth::user()->hasRole('user')) {
            return Inertia::render('Userdashboard', ['profileinfo' => $profile]);
        } elseif (Auth::user()->hasRole('trainer')) {
            return Inertia::render('Trainerdashboard');
        } elseif (Auth::user()->hasRole('admin')) {
            return Inertia::render('Dashboard');
        }
    }

    public function addblog() {
        return Inertia::render('Admin/Addblog');
    }

    // public function userprofile() {
    //     return view('user.profile');
    // }


    // public function userlivestreams() {
        
    //     $response = Http::get('https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwrXi5ZknKThspJc-Gai04g&maxResults=10&key=AIzaSyAJqrPpe8fI5JUsrark2I93gv6Je0pmNJk')['items'];
    //     return view('user.livestreams', ['response' => $response]);
    // }
}
