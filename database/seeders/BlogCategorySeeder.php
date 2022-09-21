<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class BlogCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            'name' => 'Nutrition',
            'description' => 'Healthy eating in real life',
            'image_path' => 'random7.jpg',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);


        DB::table('categories')->insert([
            'name' => 'Mental Well-Being',
            'description' => 'Resources to care for your mental and emotional well-being',
            'image_path' => 'random6.jpg',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('categories')->insert([
            'name' => 'Fitness',
            'description' => 'Fitness that fits you',
            'image_path' => 'fitness-blog.jpg',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('categories')->insert([
            'name' => 'Sexual Health',
            'description' => 'Sexual health for every body',
            'image_path' => 'sexual-health.jpg',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('categories')->insert([
            'name' => 'Sleep',
            'description' => 'Your biggest ally in your pursuit of getting healthier sleep',
            'image_path' => 'sleep.jpg',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('categories')->insert([
            'name' => 'Womens Wellness',
            'description' => 'From your hair to down there, we have got your health covered',
            'image_path' => 'women-wellness.jpg',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('categories')->insert([
            'name' => 'Parenthood',
            'description' => 'Take care of you so you can take care of them',
            'image_path' => 'parent-hood.jpg',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('categories')->insert([
            'name' => 'Product Reviews',
            'description' => 'Simplify your search for health products with expert reviews and brand comparisons',
            'image_path' => 'product-review.jpg',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
