<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Livestream;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class JoinLivestreamController extends Controller
{
    public function show($id)
    {
        $livestream = Livestream::find($id)->first();
        $trainer_profile = DB::table('profiles')->where('user_id', $livestream->user_id)->first();
        return Inertia::render('Member/JoinLivestream', ['livestream' => $livestream, 'trainer_profile' => $trainer_profile]);
    }
}
