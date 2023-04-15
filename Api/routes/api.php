<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\clientprofileController;
use App\Http\Controllers\postsController;
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

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});

Route::group([
    'middleware' => 'api',

], function ($router) {
    Route::get('Tposts', [PostsController::class, 'index']);
    Route::get('Tposts/{category}', [PostsController::class, 'show']);
    Route::get('posts', [PostController::class, 'index']);
    Route::post('post', [PostController::class, 'store']);
    Route::get('post/{id}', [PostController::class, 'show']);
    Route::put('post/{id}', [PostController::class, 'update']);
    Route::delete('post/{id}', [PostController::class, 'destroy']);
    Route::get('/user/{id}', [UserController::class, 'show']);
    Route::get('clientprofile', [clientprofileController::class, 'index']);
    Route::get('clientprofile/{clientprofile}', [clientprofileController::class, 'show']);
    Route::get('posts', [postsController::class, 'index']);
    Route::get('posts/{posts}', [postsController::class, 'show']);

});





