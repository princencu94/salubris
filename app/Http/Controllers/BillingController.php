<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Plan;
use App\Models\Subscription;
use Illuminate\Support\Facades\Auth;

class BillingController extends Controller
{
    public function index () {

        $plans = Plan::all();
        $subscription = Subscription::find(Auth::user()->id);
        $trialendingtime = strtotime($subscription->trial_period_end) - strtotime($subscription->trial_period_start);
        return Inertia::render('Member/Billing', ['plans' => $plans, 'plan' => $subscription->plan_id, 'trial_time' => floor($trialendingtime/(24*60*60)) ] );
    }

    public function plans() {

        $plans = Plan::all();
        return Inertia::render('Member/BillingPlans', ['plans' => $plans] );
    }
    
}
