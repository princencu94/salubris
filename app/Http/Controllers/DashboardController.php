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
use Illuminate\Support\Facades\DB;


class DashboardController extends Controller
{
    public function index() {

        $id = Auth::user()->id;
        

        if(Auth::user()->hasRole('user')) {
            $subscription = Subscription::where('user_id', $id)->first();
            $trialendingtime = strtotime($subscription->trial_period_end) - strtotime($subscription->trial_period_start);
            $profile = UserHealthInfo::where('user_id', $id)->first();
            $user_livestreams = Livestream::all();
            $activities = DB::table('recent_activity')->where('user_id', $id)->get();
        }
        
        // Admin Dashboard Stats
        $livestreams = Livestream::all()->count();
        $users = User::whereRoleIs('user')->count();
        $blogs = Blog::all()->count();
        $trainers = User::whereRoleIs('trainer')->count();



        if(Auth::user()->hasRole('trainer')) {
            $trainer_profile = DB::table('profiles')->where('user_id', Auth::user()->id)->first();
            $trainer_livestreams = Livestream::where('user_id', Auth::user()->id)->get();
            $trainer_schedule = DB::table('schedules')->where('trainer', Auth::user()->id)->get();
        }

       
        if(Auth::user()->hasRole('user')) {
            return Inertia::render('Userdashboard', ['profileinfo' => $profile, 'trialending' => floor($trialendingtime/(24*60*60)), 'user_livestreams' => $user_livestreams, 'activities' => $activities]);
        } elseif (Auth::user()->hasRole('trainer')) {
            return Inertia::render('Trainerdashboard', ['trainer_profile' => $trainer_profile, 'trainer_livestreams' => $trainer_livestreams, 'trainer_schedules' => $trainer_schedule ]);
        } elseif (Auth::user()->hasRole('admin')) {
            return Inertia::render('Dashboard', ['users' => $users, 'livestreams' => $livestreams, 'blogs' => $blogs, 'trainers' => $trainers]);
        }
    }

}
