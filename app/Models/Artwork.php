<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Artwork extends Model
{
    protected $fillable = [
        'slug',
        'title',
        'category',
        'image',
        'description',
        'artwork_date',
        'started_at',
        'completed_at',
        'duration',
        'price',
    ];

    protected $casts = [
        'artwork_date' => 'date',
        'started_at' => 'date',
        'completed_at' => 'date',
        'price' => 'decimal:2',
    ];
}
