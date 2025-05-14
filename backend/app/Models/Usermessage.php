<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usermessage extends Model
{
    protected $guarded=[
        "id"
    ];

    protected $casts=[
"checked"=>"boolean"
    ];
}
