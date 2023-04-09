<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\clientprofile;

class clientprofileController extends Controller
{
    public function index()
	{
	    return clientprofile::all();
	}
	public function show(clientprofile $clientprofile)
	{
	    return $clientprofile;
	}
}
