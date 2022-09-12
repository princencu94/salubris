<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('plans')->insert([
            'plan_name' => 'Starter',
            'price_monthly' => '10.99',
            'price_yearly' => '10.00',
            'limits' => 'You get full access to our beginner content',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('plans')->insert([
            'plan_name' => 'Get pumped',
            'price_monthly' => '12.99',
            'price_yearly' => '15.99',
            'limits' => 'You get full access to our less advanced content',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('plans')->insert([
            'plan_name' => 'Yearly Effect',
            'price_monthly' => '15.99',
            'price_yearly' => '17.99',
            'limits' => 'You get full access to our advanced content',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
