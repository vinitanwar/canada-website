<?php

use App\Http\Controllers\ServiceController;
use App\Http\Controllers\SiteuserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



Route::get("/v1/getallservice",[ServiceController::class,"getallservice"]);
Route::get("/v1/getservice/{slug}",[ServiceController::class,"getservice"]);
Route::post("/v1/sendmessage",[ServiceController::class,"sendMessages"]);
Route::get("/v1/getfaq",[ServiceController::class,"getFaqs"]);
Route::get("/v1/blogs",[ServiceController::class,"getBlog"]);
Route::get("/v1/blog/{slug}",[ServiceController::class,"getBlogbyslug"]);
Route::get("/v1/siteLayout",[ServiceController::class,"siteLayout"]);


Route::prefix("/v1/user")->controller(SiteuserController::class)->group(function(){
    Route::post("/signup","creatuser");
    Route::post("/login","loginuser");
    Route::get("/{token}","getuser");
    Route::post("/addpdf/{token}","addpdf");
    Route::post("/deletepdf/{token}","deletePdf");
    Route::post("/updateinfo/{token}","updateinfo");
    Route::get("/getpdf/{token}","getallpdf");
});
