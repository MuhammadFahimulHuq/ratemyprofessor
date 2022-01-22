<?php

namespace App\Models;
use App\Models\User;
use App\Models\University;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $fillable=[
        'name',
        'section',
        'university_id'
    ];

    public function users(){
        return $this->belongsToMany(User::class,'user_courses');
    }
    public function universities(){
        return $this->belongsTo(University::class);
    }
}
