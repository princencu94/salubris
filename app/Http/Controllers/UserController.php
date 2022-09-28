<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\UserHealthInfo;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserController extends Controller
{
    public function index() {
        return Inertia::render('Admin/Showusers', ['users' => User::whereRoleIs('user')->get()]);
    }

    
    public function salubrismembers() {
        $members = DB::table('registered_users')->get();
        return Inertia::render('Admin/SalubrisMemberRegister', ['members' => $members]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'memberid'  => 'required',
        ]);

        DB::table('registered_users')->insert([
            'member_id' => $request->memberid,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
        ]);

        return redirect()->route('registered-users')->with('success', 'Member has been Registered');

    }

    public function show($id) {
        $member = UserHealthInfo::where('user_id',$id)->first();
        return Inertia::render('Admin/UserHealthProfile', ['member' => $member]);
    }

    public function finduser(Request $request) {

        $user = DB::table('registered_users')->where('member_id' , $request->memberid)->first();
        return Inertia::render('CheckMember', ['user' => $user]);
    }
}
