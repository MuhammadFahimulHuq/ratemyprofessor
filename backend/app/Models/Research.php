<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Users;
class Research extends Model
{
    use HasFactory;

    public function users(){
        return $this->belongsToMany(Users::class,'user_research');
    }
}
