<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    public function findRole(string $role)
    {
        return Role::where('role_name', 'LIKE', '%' . $role . '%');
    }

    public function registerStudent(Request $request)
    {
        $field = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|confirmed',
            'phoneNo' => 'required|string',
        ]);
        if ($field->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'errors' => $field->errors(),
            ], 401);
        }
        $role = Role::where('role_name', 'Student')->first();
        if (!$role) {
            $newRole = Role::create([
                'role_name' => 'Student'
            ]);
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => bcrypt($request->input('password')),
                'phoneNo' => $request->input('phoneNo'),
            ]);
            $user->roles()->attach($newRole);
        } else {
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => bcrypt($request->input('password')),
                'phoneNo' => $request->input('phoneNo'),
            ]);
            $user->roles()->attach($role);
        }

        $token = $user->createToken('rateProfessor')->plainTextToken;
        return response()->json([
            'user' => $user,
            'role' => $user->roles()->get(),
            'token' => $token,
            'message' => 'Registration Successful!',
            'status' => true
        ], 201);
    }



    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'logged out'
        ];
    }



    public function login(Request $request)
    {
        try {
            $fields = Validator::make($request->all(), [
                'email' => 'required|email',
                'password' => 'required',
            ]);
            if ($fields->fails()) {
                return response()->json([
                    'status' => false,
                    'message' => 'validation error',
                    'errors' => $fields->errors()
                ], 401);
            }
            if (!Auth::attempt($request->only(['email', 'password']))) {
                return response()->json([
                    'status' => false,
                    'message' => 'Email & Password does not match with our record.',
                ], 401);
            }
            $user = User::where('email', $request->email)->first();

            $token = $user->createToken('ratemyprofessor')->plainTextToken;
            return response()->json([
                'user' => $user,
                'role' => $user->roles()->get(),
                'token' => $token,
                'message' => 'Login Successful!',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage()
            ], 500);
        }
    }

    public function registerFaculty(Request $request)
    {
        $field = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|confirmed',
            'phoneNo' => 'required|string',
        ]);
        if ($field->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'validation error',
                'errors' => $field->errors(),
            ], 401);
        }
        $role = Role::where('role_name', 'Faculty')->first();
        if (!$role) {
            $newRole = Role::create([
                'role_name' => 'Faculty'
            ]);
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => bcrypt($request->input('password')),
                'phoneNo' => $request->input('phoneNo'),
            ]);
            $user->roles()->attach($newRole);
        } else {
            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'password' => bcrypt($request->input('password')),
                'phoneNo' => $request->input('phoneNo'),
            ]);
            $user->roles()->attach($role);
        }

        $token = $user->createToken('rateProfessor')->plainTextToken;
        return response()->json([
            'user' => $user,
            'role' => $user->roles()->get(),
            'token' => $token,
            'message' => 'Registration Successful!',
            'status' => true
        ], 201);
    }


    public function getFaculty()
    {
        $user = User::whereHas('roles', function ($q) {
            $q->where('role_name', 'Faculty');
        })->get();
        return $user;
    }
    public function getUser()
    {
        if (auth()->user()) {
            $response = [
                'user' => auth()->user(),

            ];
            return response($response, 200);
        }
    }
}
