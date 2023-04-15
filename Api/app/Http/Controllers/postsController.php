<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\posts;
class postsController extends Controller
{
    public function index()
	{
	    return posts::all();
	}
	public function show(posts $category)
	{
	    return $category;
	}
}
