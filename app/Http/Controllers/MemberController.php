<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\UserHealthInfo;

class MemberController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Auth::user()->id;
        $profile = UserHealthInfo::where('user_id', $id)->first();
        return Inertia::render('Member/HealthInfo', ['profileinfo' => $profile] );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Member/AddHealthInfo');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        
        $id = Auth::user()->id;
        
        $userhealthinfo = new UserHealthInfo;

        $userhealthinfo->user_id = $id;
        $userhealthinfo->title = $request->title;
        $userhealthinfo->gender = $request->gender;
        $userhealthinfo->date_of_birth = $request->dateofbirth;
        $userhealthinfo->first_name = $request->first_name;
        $userhealthinfo->surname = $request->surname;
        $userhealthinfo->address = $request->address;
        $userhealthinfo->mobile = $request->mobile; 	
        $userhealthinfo->email = $request->email; 	
        $userhealthinfo->emergency_contact = $request->emergencycontact;	
        $userhealthinfo->phone = $request->phone;	
        $userhealthinfo->health_insuarance = $request->healthinsuarance;	
        $userhealthinfo->fund = $request->fund;	
        $userhealthinfo->health_conditions = $request->heartdisease . "," . $request->cardiovascularcondition . "," . $request->dizziness . "," . $request->blackouts . "," . $request->fainting . "," . $request->asthma . "," . $request->bloodpressure . "," . $request->arthritis . "," . $request->diabetes . "," . $request->epilepsy . "," . $request->gout . "," . $request->familyhxofheartdisease . "," . $request->infectiousdiseases . "," . $request->otherconditions; 	
        $userhealthinfo->injuries = $request->knees . "," . $request->lowerback . "," . $request->shoulders . "," . $request->hipspelvis . "," . $request->flexibility . "," . $request->otherinjuries;	
        $userhealthinfo->pregnant = $request->pregnant;	
        $userhealthinfo->height = $request->height;	
        $userhealthinfo->current_weight = $request->currentweight;	
        $userhealthinfo->goal_weight = $request->goalweight;	
        $userhealthinfo->body_type = $request->bodytype;
        $userhealthinfo->typical_day = $request->typicalday;	
        $userhealthinfo->energy_levels = $request->energylevels;
        $userhealthinfo->last_time_weight = $request->idealweight;	
        $userhealthinfo->area_most_attention = $request->areamostattention;	
        $userhealthinfo->activities = $request->cardio . $request->zumba . "," . $request->aerobics . "," . $request->pilates . "," . $request->fusion . "," . $request->yoga;	
        $userhealthinfo->eating_habits = $request->fastfood . "," . $request->drinksoda;

        $userhealthinfo->save();

        return redirect('dashboard')->with('success', 'Profile has been created!');
 
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
        $profile = UserHealthInfo::where('user_id', $id)->first();
        return Inertia::render('Member/EditHealthInfo', ['profileinfo' => $profile] );
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

        $userhealthinfo = UserHealthInfo::where('user_id', $id)->first();

        $userhealthinfo->user_id = $id;
        $userhealthinfo->title = $request->title;
        $userhealthinfo->gender = $request->gender;
        $userhealthinfo->date_of_birth = $request->dateofbirth;
        $userhealthinfo->first_name = $request->firstname;
        $userhealthinfo->surname = $request->surname;
        $userhealthinfo->address = $request->address;
        $userhealthinfo->mobile = $request->mobile; 	
        $userhealthinfo->email = $request->email; 	
        $userhealthinfo->emergency_contact = $request->emergencycontact;	
        $userhealthinfo->phone = $request->phone;	
        $userhealthinfo->health_insuarance = $request->healthinsuarance;	
        $userhealthinfo->fund = $request->fund;	
        $userhealthinfo->health_conditions = $request->heartdisease . "," . $request->cardiovascularcondition . "," . $request->dizziness . "," . $request->blackouts . "," . $request->fainting . "," . $request->asthma . "," . $request->bloodpressure . "," . $request->arthritis . "," . $request->diabetes . "," . $request->epilepsy . "," . $request->gout . "," . $request->familyhxofheartdisease . "," . $request->infectiousdiseases . "," . $request->otherconditions; 	
        $userhealthinfo->injuries = $request->knees . "," . $request->lowerback . "," . $request->shoulders . "," . $request->hipspelvis . "," . $request->flexibility . "," . $request->otherinjuries;	
        $userhealthinfo->pregnant = $request->pregnant;	
        $userhealthinfo->height = $request->height;	
        $userhealthinfo->current_weight = $request->currentweight;	
        $userhealthinfo->goal_weight = $request->goalweight;	
        $userhealthinfo->body_type = $request->bodytype;
        $userhealthinfo->typical_day = $request->typicalday;	
        $userhealthinfo->energy_levels = $request->energylevels;
        $userhealthinfo->last_time_weight = $request->idealweight;	
        $userhealthinfo->area_most_attention = $request->areamostattention;	
        $userhealthinfo->activities = $request->cardio . $request->zumba . "," . $request->aerobics . "," . $request->pilates . "," . $request->fusion . "," . $request->yoga;	
        $userhealthinfo->eating_habits = $request->fastfood . "," . $request->drinksoda;

        $userhealthinfo->save();

        return redirect()->route('dashboard')->with('success', 'Your Profile has been updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
