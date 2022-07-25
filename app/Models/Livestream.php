<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livestream extends Model
{
    protected $fillable = ['title','about','link', 'start_date', 'time'];
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
