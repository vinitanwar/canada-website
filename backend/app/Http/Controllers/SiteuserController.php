<?php

namespace App\Http\Controllers;

use App\Models\Siteuser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

use function Laravel\Prompts\select;

class SiteuserController extends Controller
{
    public function creatuser(Request $request){
$validator= Validator::make($request->all(),[
"name" => "required|string|max:255",
    "email" => "required|email|unique:siteusers,email",
    "password" => "required|string|min:6",
    "companyname" => "required|string|max:255",
]);
if($validator->fails()){
    return response()->json(["success"=>false,"message"=>$validator->errors()->all()]);
}


$token=Str::random(60);

  $user= new  Siteuser();
  $user->name = $request["name"]; 
  $user->email = $request["email"]; 
  $user->password = $request["password"]; 
  $user->companyname = $request["companyname"]; 
  $user->token = $token; 
  $user->save();

  return response()->json(["success"=>true,"message"=>"signup successfully","token"=>$token]);



}

public function loginuser(Request $request){
    $validate=Validator::make($request->all(),[
        "email"=>"required|email",
        "password"=>"required|string|min:6",
    ]);

    if($validate->fails()){
        return response()->json(["success"=>false,"message"=>$validate->errors()->all()]);

    }
    $verifyEmail= Siteuser::where("email",$request["email"])->first();
     
    if (!$verifyEmail || !Hash::check($request->password, $verifyEmail->password)) {
        return response()->json([
            "success" => false,
            "message" => "Invalid email or password"
        ]); 
    }

      

     return response()->json(["success"=>true,"message"=>"login successfully","token"=>$verifyEmail->token]);


}


public function getuser(string $token){

$verifyToken=Siteuser::where("token",$token)->first();
if(!$verifyToken){
    return response()->json(["success"=>false,"message"=>"Invalid user"]);
}
$verifyToken->makeHidden(["id", "password"]);
return response()->json(["success"=>true,"user"=>$verifyToken]);



}


public function addpdf(Request $request,$token){
    $token = $request->token;

    $situser = Siteuser::where("token", $token)->first();

    if (!$situser) {
        return response()->json([
            "success" => false,
            "message" => "User not found"
        ]);
    }

    // Validate the incoming request
    $request->validate([
        "pdf" => "required|file",
        "time" => "required"
    ]);

    $filepath = null;

    if ($request->hasFile("pdf")) {
        $filepath = $request->file("pdf")->store("allfiles", "public");
    }
    // $allreadypdfs = is_array($situser->pdf)
    // ? $situser->pdf
    // : (json_decode($situser->pdf, true) ?? []);
    $allreadypdfs= is_array($situser->pdf)?$situser->pdf:[] ;

$allreadypdfs[] = ["pdf" => $filepath, "time" => $request->time];

$situser->pdf = $allreadypdfs;
    $situser->save();

    return response()->json(["success" => true]);
}


public function deletePdf(Request $request, $token)
{
    $siteuser=Siteuser::where("token",$token)->first();
    
    if (!$siteuser) {
        return response()->json([
            "success" => false,
            "message" => "User not found"
        ]);
    }
   
    $pdfname=$request->pdfname;
$allpdf=$siteuser->pdf;
    $filterpdf=array_filter($allpdf,function($n)use ($pdfname){
        return $n['pdf'] !== $pdfname;
    });



   $siteuser->pdf=array_values($filterpdf);
   $siteuser->save();


   if (Storage::disk('public')->exists($pdfname)) {
    Storage::disk('public')->delete($pdfname);
}




return response()->json(["success"=>true,"message"=>"delete successfuly"]);




}








public function getallpdf($token){
    $situser = Siteuser::where("token", $token)->first();
    
    if (!$situser) {
        return response()->json(["success" => false, "message" => "User not found"], );
    }

    $allpdf=$situser->pdf;

    return response()->json(["success" => true,"pdf"=>$allpdf]);
   
}

public function updateinfo(Request $request,$token){
$validator=Validator::make($request->all(),[
"name" => "required|string|max:255",
    "email" => "required|email",
    "companyname" => "required|string|max:255",
]);
if($validator->fails()){
    return response()->json(["success"=>false,"message"=>$validator->errors()->all()]);
}
$situser= Siteuser::where("token", $token)->first();
if (!$situser) {
        return response()->json(["success" => false, "message" => "User not found"], );
    }
$situser->name=$request["name"];
$situser->email=$request["email"];
$situser->companyname=$request["companyname"];

$situser->numberone = $request["numberone"] ?? null;
$situser->numbertwo = $request["numbertwo"] ?? null;
$situser->address = $request["address"] ?? null;
$situser->about = $request["about"] ?? null;
$situser->update();

return response()->json(["success"=>true,"message"=>"Edit Successfuly"]);
}




}
