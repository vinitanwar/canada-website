<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Blog extends Model
{
protected $guarded=[];
protected $casts=[
"details"=>"array",
"status"=>"boolean"
];

public function setTitleAttribute($value){
    $this->attributes["title"]=$value;
    $this->attributes["slug"]=Str::slug($value);
}

}
