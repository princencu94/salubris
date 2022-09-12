<?php

namespace App\Http\Controllers;



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use App\Models\UserHealthInfo;
use App\Models\Subscription;
use App\Models\User;
use App\Models\Livestream;
use App\Models\Blog;


class DashboardController extends Controller
{
    public function index() {

        $id = Auth::user()->id;
        $profile = UserHealthInfo::where('user_id', $id)->first();
        $subscription = Subscription::where('user_id', $id)->first();
        $trialendingtime = strtotime($subscription->trial_period_end) - strtotime($subscription->trial_period_start);

        // Admin Dashboard Stats
        $livestreams = Livestream::all()->count();
        $users = User::whereRoleIs('user')->count();
        $blogs = Blog::all()->count();
        $trainers = User::whereRoleIs('trainer')->count();


        if(Auth::user()->hasRole('user')) {
            return Inertia::render('Userdashboard', ['profileinfo' => $profile, 'trialending' => floor($trialendingtime/(24*60*60))]);
        } elseif (Auth::user()->hasRole('trainer')) {
            return Inertia::render('Trainerdashboard');
        } elseif (Auth::user()->hasRole('admin')) {
            return Inertia::render('Dashboard', ['users' => $users, 'livestreams' => $livestreams, 'blogs' => $blogs, 'trainers' => $trainers]);
        }
    }

}
