<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Schedule;
use App\Models\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ScheduleController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Schedule', ['schedules' => Schedule::all()]);
    }

    public function create()
    {
        $users = User::whereRoleIs('trainer')->get();
        return Inertia::render('Admin/AddSchedule', ['trainers' => $users]);
    }

    public function store(Request $request)
    {
        $attributes = $request->validate([
            'event_name' => 'required',
            'date' => 'required',
            'trainer' => 'required',
            'event_time' => 'required',
        ]);

        
        
        $schedule = new Schedule;

        $schedule->user_id = Auth::user()->id;
        $schedule->event_time = $request->event_time;
        $schedule->date = $request->date;
        $schedule->event_name = $request->event_name;
        $schedule->trainer = $request->trainer;

        $schedule->save();

        return redirect()->route('schedule')->with('success', 'Event has been created');
    
    }

    public function edit($id)
    {   
        $users = User::whereRoleIs('trainer')->get();
        $schedule = Schedule::find($id);
        return Inertia::render('Admin/EditSchedule', ['trainers' => $users, 'schedule' => $schedule]);
    }

    public function update(Request $request, $id)
    {
        $schedule = Schedule::findOrFail($id);

        $attributes = $request->validate([
            'event_name' => 'required',
            'date' => 'required',
            'trainer' => 'required',
            'event_time' => 'required',
        ]);

        $schedule->user_id = Auth::user()->id;
        $schedule->event_time = $request->event_time;
        $schedule->date = $request->date;
        $schedule->event_name = $request->event_name;
        $schedule->trainer = $request->trainer;
       
        $schedule->save();

        return redirect()->route('schedule')->with('success', 'Schedule has been updated');;
    }

    public function destroy($id)
    {
        $schedule = Schedule::find($id);
        $schedule->delete();

        return redirect()->route('schedule')->with('success', 'Schedule has been deleted!');;
    }
}
