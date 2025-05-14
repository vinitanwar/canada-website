<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Siteuser extends Model
{
    //
    protected $guarded=[];
    protected $casts=[
        "pdf"=>"array"
    ];
    
    public function setPasswordAttribute($value)
    {
        
            $this->attributes['password'] = Hash::make($value);
        
    }

   
}
