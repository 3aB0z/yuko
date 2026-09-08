<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Artwork;
use Illuminate\Database\Seeder;

class ArtworkSeeder extends Seeder
{
    public function run(): void
    {
        Artwork::create([
            'slug' => 'artwork-1',
            'title' => 'Artwork 1',
            'category_id' => Category::where('slug', 'drawing')->firstOrFail()->id,
            'image' => '/images/artworks/artwork-1.jpg',
            'description' => 'A drawing created through a slow process of observation and detail.',
            'artwork_date' => '2026-01-15',
            'started_at' => '2026-01-10',
            'completed_at' => '2026-01-15',
            'duration' => '5 days',
            'price' => 0,
        ]);

        Artwork::create([
            'slug' => 'artwork-2',
            'title' => 'Artwork 2',
            'category_id' => Category::where('slug', 'clay-sculpture')->firstOrFail()->id,
            'image' => '/images/artworks/artwork-2.jpg',
            'description' => 'A handmade clay figure shaped and refined by hand in the studio.',
            'artwork_date' => '2026-02-20',
            'started_at' => '2026-02-15',
            'completed_at' => '2026-02-20',
            'duration' => '5 days',
            'price' => 0,
        ]);

        Artwork::create([
            'slug' => 'artwork-3',
            'title' => 'Artwork 3',
            'category_id' => Category::where('slug', 'drawing')->firstOrFail()->id,
            'image' => '/images/artworks/artwork-3.jpg',
            'description' => 'A drawing exploring form, expression, and small visual details.',
            'artwork_date' => '2026-03-08',
            'started_at' => '2026-03-01',
            'completed_at' => '2026-03-08',
            'duration' => '1 week',
            'price' => 0,
        ]);
    }
}
