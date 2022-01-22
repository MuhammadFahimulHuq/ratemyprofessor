<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
class AuthController extends Controller
{

    public function findRole(string $role){
        return Role::where('role_name','LIKE','%'.$role.'%');
    }

    public function registerStudent(Request $request){
        $field = Validator::make($request->all(),[
            'name'=>'required|string',
            'email' =>'required|string|unique:users,email',
            'password'=>'required|confirmed',
            'phoneNo' =>'required|string',
        ]);
        if($field->fails()){
            return response()->json([
                'status'=> 422,
                'errors'=> $field->messages(),
            ]);
        }
        $role = Role::where('role_name','Student')->first();
        if(!$role){
            $newRole =Role::create([
                'role_name' => 'Student'
            ]);
            $user = User::create([
                'name' => $request->input('name'),
                'email'=>$request->input('email'),
                'password'=>bcrypt($request->input('password')),
                'phoneNo'=>$request->input('phoneNo'),
            ]);
            $user->roles()->attach($newRole); 

        }
       else{$user = User::create([
        'name' => $request->input('name'),
        'email'=>$request->input('email'),
        'password'=>bcrypt($request->input('password')),
        'phoneNo'=>$request->input('phoneNo'),
        ]);
        $user->roles()->attach($role);    

    }

        $token = $user->createToken('rateProfessor')->plainTextToken;
        $response = [ 
            'user' => $user,
            'role'=>$user->roles()->get(),
            'token' =>$token,
            'message'=>'Registration Successful!',
            'status'=>200
        ];
    
        return response($response,201);
    }



    public function logout(Request $request){
        auth()->user()->tokens()->delete();
        return[
            'message' => 'logged out'
        ];
    }

  

    public function login(Request $request)
    {
    $fields= $request->validate([
         'email' =>'required|string',
         'password'=>'required|string',
        
    ]);
 
    $user = User::where('email',$fields['email'])->first();

    if(!$user || !Hash::check($fields['password'], $user->password)){
        return response([
            'message' => 'Bad credentials',401
        ]);
    }

    $token = $user->createToken('ratemyprofessor')->plainTextToken;
    $response = [
        'user' => $user,
        'role'=>$user->roles()->get(),
        'token' =>$token,
        'message'=>'Login Successful!',
        'status'=>200
    ];
    return response($response,201);
    }

    public function registerFaculty(Request $request){
        $field = Validator::make($request->all(),[
            'name'=>'required|string',
            'email' =>'required|string|unique:users,email',
            'password'=>'required|confirmed',
            'phoneNo' =>'required|string',
        ]);
        if($field->fails()){
            return response()->json([
                'status'=> 422,
                'errors'=> $field->messages(),
            ]);
        }
        $role = Role::where('role_name','Faculty')->first();
        if(!$role){
            $newRole =Role::create([
                'role_name' => 'Faculty'
            ]);
            $user = User::create([
                'name' => $request->input('name'),
                'email'=>$request->input('email'),
                'password'=>bcrypt($request->input('password')),
                'phoneNo'=>$request->input('phoneNo'),
            ]);
            $user->roles()->attach($newRole); 
      
        }
       else{$user = User::create([
        'name' => $request->input('name'),
        'email'=>$request->input('email'),
        'password'=>bcrypt($request->input('password')),
        'phoneNo'=>$request->input('phoneNo'),
        ]);
        $user->roles()->attach($role);  
 
    }

        $token = $user->createToken('rateProfessor')->plainTextToken;
        $response = [ 
            'user' => $user,
            'role'=>$user->roles()->get(),
            'token' =>$token,
            'message'=>'Registration Successful!',
            'status'=>200
        ];
    
        return response($response,201);
    }

    public function getFaculty(){
        $user = User::whereHas('roles',function($q){
            $q->where('role_name','Faculty');
        })->get();
        return $user;
    }
    public function getUser(){
        if(auth()->user()){
            $response =[
                'user'=>auth()->user(),
                
            ];
            return response($response,200); 
        }
        
    }
}

