<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserHealthInfo extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'gender',
        'date_of_birth',
        'first_name',
        'surname',
        'address',
        'mobile',
        'email',
        'emergency_contact',
        'phone',
        'health_insuarance',
        'fund',
        'health_conditions',
        'injuries',
        'pregnant',
        'height',
        'current_weight',
        'goal_weight',
        'body_type',
        'typical_day',
        'energy_levels',
        'last_time_weight',
        'area_most_attention',
        'activities',
        'eating_habits',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    use HasFactory;
}
