<?php

namespace App\Http\Controllers;
use App\Models\Qualification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class QualificationController extends Controller
{
    public function store(Request $request){
        $field= $request->validate([
            'name' => 'required|string',
         
            
        ]);
        $userId = Auth::id();
            $qualification = Qualification::create([
                'name'=>$field['name'],
                'user_id'=>$userId
            ]);
                $user = auth()->user();
              
                if(!$user){
                    return [
                        'message'=>'Bad cred'
                    ];
                }
             
            
                return response([
                    'qualification'=>$qualification,
                   'status code'=> 201
                ]);
    }
    public function getUserQualification(){
        $userId = Auth::id();
        return Qualification::where('user_id','Like','%'.$userId.'%')->get();
    }
}
