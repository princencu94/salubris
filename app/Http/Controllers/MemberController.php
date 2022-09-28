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

        $request->validate([
 
            'title'  => 'required',
            'gender'  => 'required',
            'dateofbirth' => 'required',
            'firstname' => 'required',
            'surname' => 'required',
            'address' => 'required',
            'mobile' => 'required',
            'email' => 'required',
            'pregnant' => 'required',
            'areaofattention' => 'required',
            'maingoal' => 'required',
            'personaltrainer' => 'required',
            'motivation' => 'required'
        ]);


        $id = Auth::user()->id;
        
        $userhealthinfo = new UserHealthInfo;

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
        $userhealthinfo->health_conditions = $request->heartdisease . "," . $request->cardiovascularcondition . "," . $request->dizziness . "," . $request->blackouts . "," . $request->fainting . "," . $request->asthma . "," . $request->bloodpressure . "," . $request->arthritis . "," . $request->diabetes . "," . $request->epilepsy . "," . $request->gout . "," . $request->familyhxofheartdisease . "," . $request->infectiousdiseases . "," . $request->otherconditions; 	
        $userhealthinfo->injuries = $request->knees . "," . $request->lowerback . "," . $request->shoulders . "," . $request->hipspelvis . "," . $request->flexibility . "," . $request->otherinjuries;	
        $userhealthinfo->pregnant = $request->pregnant;	
        $userhealthinfo->area_of_attention = $request->areaofattention;
        $userhealthinfo->main_goal = $request->maingoal;	
        $userhealthinfo->personal_trainer = $request->personaltrainer;	
        $userhealthinfo->motivation = $request->motivation;		
        

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

        $request->validate([
 
            'title'  => 'required',
            'gender'  => 'required',
            'dateofbirth' => 'required',
            'firstname' => 'required',
            'surname' => 'required',
            'address' => 'required',
            'mobile' => 'required',
            'email' => 'required',
            'pregnant' => 'required',
            'areaofattention' => 'required',
            'maingoal' => 'required',
            'personaltrainer' => 'required',
            'motivation' => 'required'
        ]);

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
        $userhealthinfo->health_conditions = $request->heartdisease . "," . $request->cardiovascularcondition . "," . $request->dizziness . "," . $request->blackouts . "," . $request->fainting . "," . $request->asthma . "," . $request->bloodpressure . "," . $request->arthritis . "," . $request->diabetes . "," . $request->epilepsy . "," . $request->gout . "," . $request->familyhxofheartdisease . "," . $request->infectiousdiseases . "," . $request->otherconditions; 	
        $userhealthinfo->injuries = $request->knees . "," . $request->lowerback . "," . $request->shoulders . "," . $request->hipspelvis . "," . $request->flexibility . "," . $request->otherinjuries;	
        $userhealthinfo->pregnant = $request->pregnant;	
        $userhealthinfo->area_of_attention = $request->areaofattention;
        $userhealthinfo->main_goal = $request->maingoal;	
        $userhealthinfo->personal_trainer = $request->personaltrainer;	
        $userhealthinfo->motivation = $request->motivation;	

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
