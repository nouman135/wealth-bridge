<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class clientprofile extends Model
{
    use HasFactory;

    // Add this:
    protected $table = 'clientprofile';
}
