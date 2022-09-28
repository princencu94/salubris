<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Livestream;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;


class RecentActivityController extends Controller
{
    public function store(Request $request) {
 
        $recent_activity = DB::table('recent_activity')->where('activity_id', $request->id)->first();
        if(!isset($recent_activity)) {
            DB::table('recent_activity')->insert([
                'user_id' => Auth::user()->id,
                'activity_id' => $request->id,
                'title'=> $request->title,
                'description' => $request->about,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
        
    }
}
