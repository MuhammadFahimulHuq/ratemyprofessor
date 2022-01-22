<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;
use App\Models\University;
class UniversityController extends Controller
{
    public function storeUserUniversity(Request $request){
        $field= $request->validate([
            'name' => 'required|string',
            'address'=>'required|string',
            'founded'=>'required'
        ]);
        
       $university = University::create([
                'name'=>$field['name'],
                'address'=>$field['address'],
                'founded'=>$field['founded']
            ]);
                $user = auth()->user();
                if(!$user){
                    return [
                        'message'=>'Bad cred'
                    ];
                }
                $university->users()->attach($user);
            
                return response([
                    'university'=>$university,
                    201
                ]);
    }

    public function store(Request $request){
        $field= $request->validate([
            'name' => 'required|string',
            'address'=>'required|string',
            'founded'=>'required'
        ]);
     
            $university = University::create([
                'name'=>$field['name'],
                'address'=>$field['address'],
                'founded'=>$field['founded']
            ]);
                $user = auth()->user();
                if(!$user){
                    return [
                        'message'=>'Bad cred'
                    ];
                }
            
            
                return response([
                    'university'=>$university,
                    201
                ]);
    }

    public function index(){
        return University::orderBy("name")->get();
    }
    public function getUserUniversity($id){
        return Univsersity::where('user_id','Like','%'.$id.'%')->get();
    }
}
