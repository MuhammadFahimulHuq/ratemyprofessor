<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Role;
use App\Models\Qualification;
use App\Models\Research;
use App\Models\Course;
use App\Models\University;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'phoneNo'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public function roles(){
        return $this->belongsToMany(Role::class,'user_roles');
    }
    public function qualifications(){
        return $this->belongsToMany(Qualification::class);
    }
    public function courses(){
        return $this->belongsToMany(Course::class,'user_courses');
    }
    public function university(){
        return $this->belongsToMany(University::class,'user_universities');
    }
    public function research(){
        return $this->belongsToMany(Research::class,'user_research');
    }
}
