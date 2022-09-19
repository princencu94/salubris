<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserHealthInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_health_infos', function (Blueprint $table) {
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
            $table->string('emergency_contact')->nullable();
            $table->string('phone')->nullable();
            $table->string('health_conditions')->nullable();
            $table->string('injuries')->nullable();
            $table->string('pregnant');
            $table->string('area_of_attention');
            $table->string('main_goal');
            $table->string('personal_trainer');
            $table->string('motivation');

            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_health_infos');
    }
}
