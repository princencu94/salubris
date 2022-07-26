<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Profile;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function index() {

        $id = Auth::user()->id;
        $profile = Profile::where('user_id', $id)->first();
        return Inertia::render('Trainer/Profile', ['profile' => $profile]);
    }


    public function update(Request $request, $id)
    {
        $id = Auth::user()->id;
        $profile = Profile::where('user_id', $id)->first();

        
        $request->validate([
            'type' => 'required',
            'bio' => 'required',
            'cover_photo' => 'required',
            'image' => 'required',
        ]);

        if($request->file('cover_photo') === null) {
            $cover_file = $profile->cover_photo;
        } else {
            $cover_file = $request->file('cover_photo')->getClientOriginalName();
            $request->file('cover_photo')->move(public_path('images'), $cover_file);
        }

        if($request->file('image') === null) {
            $image_file = $profile->image;
        } else {
            $image_file = $request->file('image')->getClientOriginalName();
            $request->file('image')->move(public_path('images'), $image_file);
        }

        $profile->user_id = Auth::id();
        $profile->email =  Auth::user()->email;
        $profile->bio = $request->bio;
        $profile->type = $request->type;
        $profile->cover_photo = $cover_file;
        $profile->image = $image_file;

        $profile->save();

        return redirect()->route('dashboard');
    }

    public function store(Request $request)
    {

        $request->validate([
            'type' => 'required',
            'bio' => 'required',
            'cover_photo' => 'required',
            'image' => 'required',
        ]);

        $image_file = $request->file('image')->getClientOriginalName();
        $request->file('image')->move(public_path('images'), $image_file);
        $cover_file = $request->file('cover_photo')->getClientOriginalName();
        $request->file('cover_photo')->move(public_path('images'), $cover_file);

        $profile = new Profile;

        $profile->user_id = Auth::id();
        $profile->email =  Auth::user()->email;
        $profile->bio = $request->bio;
        $profile->type = $request->type;
        $profile->cover_photo = $cover_file;
        $profile->image = $image_file;
        
        $profile->save();

        return redirect()->route('dashboard');
    }
}
