<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Artwork;

class Category extends Model
{
    protected $fillable = [
        'name',
        'slug',
    ];

    public function artworks(): HasMany
    {
        return $this->hasMany(Artwork::class);
    }
}
