<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Livestream;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LiveStreamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Trainer/Livestreams', ['livestreams' => Livestream::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $exercises = DB::table('exercise_categories')->get();
        return Inertia::render('Trainer/Livestream', ['exercises' => $exercises]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'title' => 'required',
            'link' => 'required',
            'category' => 'required',
            'about' => 'required',
            'start_date' => 'required',
            'time' => 'required',
            
        ]);

        $livestream = new Livestream;

        $livestream->user_id = Auth::id();
        $livestream->title = $request->title;
        $livestream->about = $request->about;
        $livestream->link = $request->link;
        $livestream->start_date = $request->start_date;
        $livestream->time = $request->time;
        $livestream->category = $request->category;
        
        $livestream->save();

        return redirect()->route('livestreams')->with('success', 'Livestream has been created!');;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $livestream = Livestream::find($id);
        return Inertia::render('Trainer/EditLivestream', ['livestream' => $livestream]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $livestream = Livestream::find($id);

        // $request->validate([
        //     'title' => 'required',
        //     'link' => 'required',
        //     'about' => 'required',
        //     'start_date' => 'required',
        //     'start_time' => 'required',
            
        // ]);

        $livestream->user_id = Auth::id();
        $livestream->title = $request->title;
        $livestream->about = $request->description;
        $livestream->link = $request->link;
        $livestream->start_date = $request->start_date;
        $livestream->time = $request->start_time;
        
        $livestream->save();

        return redirect()->route('livestreams')->with('success', 'Livestream has been updated!');;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $livestream = Livestream::find($id);
        $livestream->delete();

        return redirect()->route('livestreams')->with('success', 'Livestream has been deleted!');;
    }
}
