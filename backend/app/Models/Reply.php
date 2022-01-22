<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Review;
use App\Models\User;
class Reply extends Model
{
    use HasFactory;

    protected $fillable=[
        'reply','review_id','user_id'
    ];
    public function review(){
        return $this->belongsTo(Review::class);
    }
    public function users(){
        return $this->belongsTo(User::class);
    }
 
 
}
