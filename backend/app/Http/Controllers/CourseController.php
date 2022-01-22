<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Course;
use App\Models\University;


class CourseController extends Controller
{
    public function storeCourseUniversity(Request $request,$id){
        $field= $request->validate([
            'name' => 'required|string',
            'section'=>'required|string'
            
        ]);
        $university=University::find($id);
        if(!$university){
            return response([
                'message'=>'university not found',
                'status'=>404
            ]);
        }
            $course = Course::create([
                'name'=>$field['name'],
                'section'=>$field['section'],
                'university_id'=>$id
            ]);
                $user = auth()->user();
              
                if(!$user){
                    return [
                        'message'=>'Bad cred'
                    ];
                }
             
            
                return response([
                    'course'=>$course,
                   'status code'=> 201
                ]);
    }
    public function storeUserCourse(Request $request,$id){
        $field= $request->validate([
            'name' => 'required|string',
            'section'=>'required|integer'
            
        ]);
        $university=University::find($id);
        if(!$university){
            return response([
                'message'=>'university not found',
                'status'=>404
            ]);
        }

            $course = Course::create([
                'name'=>$field['name'],
                'section'=>$field['section'],
                'university_id'=>$id
            ]);
                $user = auth()->user();
            $course->users()->attach($user);  
                if(!$user){
                    return [
                        'message'=>'Bad cred'
                    ];
                }
             
            
                return response([
                    'course'=>$course,
                   'status code'=> 201
                ]);
    }
}
