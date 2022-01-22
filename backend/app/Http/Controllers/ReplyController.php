<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Models\Reply;
use App\Models\Review;
class ReplyController extends Controller
{

    public function store(Request $request,$id){
        $field =$request->validate([
            'reply' => 'required|string',
        ]);
        $userId = Auth::id();
    if(!$userId){
        return response([
            'message'=>'Bad credentials',404
        ]); }
    
        $reply = Reply::create([
            'reply'=>$field['reply'],
            'review_id' =>$id,
            'user_id'=>$userId
        ]);
        $response = [
            'reply'=>$reply
        ];
        return response($response,201); 
    }
    public function getReplyByReviewId($id){
        $review = Review::find($id);
        if(!$review){
            return response([
                'message'=>'Not found error',404
            ]);
        }
        $reply = Reply::where('review_id','Like','%'.$id.'%')->get();
        $response =[
            'reply'=>$reply
        ];
        return response($response,201);
    }
}
