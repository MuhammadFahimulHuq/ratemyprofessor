<?php

namespace App\Models;
use App\Models\Review;
use App\Models\Reply;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    use HasFactory;

    public function review(){
      return $this->hasMany(Review::class);
    }
    public function reply(){
        return $this->belongsTo(Reply::class);
    }
}
