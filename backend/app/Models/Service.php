<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Service extends Model
{
    protected $fillable=[
        "title",
        "banner_img",
        "des",
        "slug",
        "details",
        "status"
    ];
    protected $casts=[
        "details"=>"array",
        "status"=>"boolean"
    ];

public function setTitleAttribute($value){
    $this->attributes["title"]=$value;
    $this->attributes["slug"] =  Str::slug($value) ;

}


}
