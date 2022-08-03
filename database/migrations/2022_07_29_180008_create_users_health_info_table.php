<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersHealthInfoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_health_info', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->unique();
            $table->string('title');
            $table->string('gender');
            $table->string('date_of_birth');
            $table->string('first_name');
            $table->string('surname');
            $table->string('address');
            $table->string('mobile');
            $table->string('email');
            $table->string('emergency_contact');
            $table->string('phone');
            $table->string('health_insuarance');
            $table->string('fund');
            $table->string('health_conditions');
            $table->string('injuries');
            $table->string('pregnant');
            $table->integer('height');
            $table->integer('current_weight');
            $table->string('goal_weight');
            $table->string('body_type');
            $table->string('typical_day');
            $table->string('energy_levels');
            $table->string('last_time_weight');
            $table->string('area_most_attention');
            $table->string('activities');
            $table->string('eating_habits');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_health_info');
    }
}
