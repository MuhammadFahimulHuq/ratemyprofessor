<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Course;
use App\Models\User;
class University extends Model
{
    use HasFactory;
    protected $fillable=[
        'name','address','founded'
    ];

    public function courses(){
        return $this->belongsToMany(Course::class);
    }
    public function users(){
        return $this->belongsToMany(User::class,'user_universities');
    }
}
