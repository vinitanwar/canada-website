<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\Faq;
use App\Models\Layout;
use App\Models\Service;
use App\Models\Usermessage;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    
public function getallservice(){
    $service=Service::where("status",true)->get();
    return $service;
}

public function getservice(string $slug){
    $service=Service::where("slug",$slug)->first();
    return $service;
}


public function sendMessages(Request $request){
    
 Usermessage::create(["name"=>$request["S_name"],"email"=>$request["S_email"],"number"=>$request["S_phone"],
"company"=>$request["company_name"],"message"=>$request["need_service"]]);



}

public function getFaqs(){
    $faq= Faq::all();
    return $faq;
}

public function getBlog(){
    $blog=Blog::where("status",true)->get();
    
    return $blog;}
    public function getBlogbyslug(string $slug){
        $blog=Blog::where("slug",$slug)->first();
        
        return $blog;}


public function siteLayout(){
    $layout= Layout::first();

    return $layout;
}


}
