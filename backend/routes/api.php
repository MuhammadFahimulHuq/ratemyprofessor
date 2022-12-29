<?php

use App\Http\Controllers\UniversityController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ReplyController;
use App\Http\Controllers\QualificationController;
use App\Http\Controllers\CourseController;



/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Route::get('/university',[UniversityController::class,'index']);

// Route::post('/university',[UniversityController::class,'store']);


Route::get('/greeting', function () {
    return 'Hello World';
});
Route::post('/student/register', [AuthController::class, 'registerStudent']);
Route::post('/faculty/register', [AuthController::class, 'registerFaculty']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/faculties', [AuthController::class, 'getFaculty']);
Route::get('/faculty/{id}', [AuthController::class, 'getFacultyById']);
Route::get('/get/review/{id}', [ReviewController::class, 'findReviewBy']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::put('/update/faculty',[AuthController::class,'updateFaculty']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/review/{id}', [ReviewController::class, 'store']);
    Route::get('/reply/{id}', [ReplyController::class, 'getReplyByReviewId']);
    Route::post('/reply/{id}', [ReplyController::class, 'store']);
    Route::post('/user/university', [UniversityController::class, 'storeUserUniversity']);
    Route::post('/university', [UniversityController::class, 'store']);
    Route::get('/university', [UniversityController::class, 'index']);
    Route::post('/university/{id}', [UniversityController::class, 'getUserUniversity']);
    Route::post('/qualification', [QualificationController::class, 'store']);
    Route::get('/qualification', [QualificationController::class, 'getUserQualification']);
    Route::post('/course/{id}', [CourseController::class, 'storeCourseUniversity']);
    Route::post('/course/user/{id}', [CourseController::class, 'storeUserCourse']);
    Route::get('/getuser', [AuthController::class, 'getUser']);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
