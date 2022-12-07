<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{


    public function store(Request $request, $id)
    {
        $field = $request->validate([
            'rating' => 'required|between:0,5',
            'comment' => 'required|string',

        ]);
        $findUser = User::find($id);
        if (!$findUser) {
            return response([
                'message' => 'not found error', 404
            ]);
        }
        $user = auth()->user();
        $userId = Auth::id();
        if (!$user) {
            return response([
                'message' => 'unauthorized', 401
            ]);
        }
        $review = Review::create([
            'rating' => $field['rating'],
            'comment' => $field['comment'],
            'reviewBy_id' => $userId,
            'reviewFor_id' => $id,

        ]);

        $response = [
            'reviews' => $review
        ];
        return response($response, 201);
    }


    public function findReviewBy($id)
    {
        $findUser = User::find($id);
        if (!$findUser) {
            return response([
                'message' => 'not found error', 404
            ]);
        }
        $review = Review::where('reviewFor_id', 'Like', '%' . $id . '%')->get();

        if ($review->isEmpty()) {
            return response([
                'message' => 'Not found error', 404
            ]);
        }
        $response = $review;
        return response($response, 201);
    }
}
