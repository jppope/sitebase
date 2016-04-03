<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $fillable = ['user_id','template','img','title','body','focus','extra'];

    public static function pageTitle($title){
        return static::where(compact('title'))->firstOrFail();
    }

    public function user(){
        return $this->belongsTo('App\User');
    }
}
