<?php

namespace Tests\Feature;

use App\Models\Artwork;
use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class ArtworkCrudTest extends TestCase
{
    use RefreshDatabase;

    private function admin(): User
    {
        return User::factory()->create([
            'is_admin' => true,
        ]);
    }

    private function category(): Category
    {
        return Category::create([
            'name' => 'Drawing',
            'slug' => 'drawing',
        ]);
    }

    public function test_admin_can_create_artwork(): void
    {
        Storage::fake('public');

        $this->actingAs($this->admin());

        $category = $this->category();

        $response = $this->post(route('admin.artworks.store'), [
            'slug' => 'test-artwork',
            'title' => 'Test Artwork',
            'category_id' => $category->id,
            'image' => UploadedFile::fake()->create(
                'artwork.jpg',
                100,
                'image/jpeg'
            ),
            'description' => 'Test description',
            'artwork_date' => '2026-09-01',
            'started_at' => '2026-08-01',
            'completed_at' => '2026-09-01',
            'duration' => '1 month',
            'price' => 500,
        ]);

        $response->assertRedirect(route('admin.artworks.index'));

        $this->assertDatabaseHas('artworks', [
            'slug' => 'test-artwork',
            'title' => 'Test Artwork',
            'category_id' => $category->id,
        ]);
    }

    public function test_artwork_creation_requires_a_valid_category(): void
    {
        Storage::fake('public');

        $this->actingAs($this->admin());

        $response = $this->post(route('admin.artworks.store'), [
            'slug' => 'test-artwork',
            'title' => 'Test Artwork',
            'category_id' => 99999,
            'image' => UploadedFile::fake()->create(
                'artwork.jpg',
                100,
                'image/jpeg'
            ),
            'description' => 'Test description',
            'artwork_date' => '2026-09-01',
        ]);

        $response->assertSessionHasErrors('category_id');

        $this->assertDatabaseMissing('artworks', [
            'slug' => 'test-artwork',
        ]);
    }

    public function test_admin_can_update_artwork(): void
    {
        Storage::fake('public');

        $this->actingAs($this->admin());

        $category = $this->category();

        $artwork = Artwork::create([
            'slug' => 'test-artwork',
            'title' => 'Old Title',
            'category_id' => $category->id,
            'image' => '/storage/artworks/old.jpg',
            'description' => 'Old description',
            'artwork_date' => '2026-08-01',
        ]);

        $response = $this->put(
            route('admin.artworks.update', $artwork),
            [
                'title' => 'Updated Title',
                'category_id' => $category->id,
                'description' => 'Updated description',
                'artwork_date' => '2026-09-01',
            ]
        );

        $response->assertRedirect(route('admin.artworks.index'));

        $this->assertDatabaseHas('artworks', [
            'id' => $artwork->id,
            'title' => 'Updated Title',
            'description' => 'Updated description',
        ]);
    }

    public function test_admin_can_delete_artwork(): void
    {
        Storage::fake('public');

        $this->actingAs($this->admin());

        $category = $this->category();

        $artwork = Artwork::create([
            'slug' => 'test-artwork',
            'title' => 'Test Artwork',
            'category_id' => $category->id,
            'image' => '/storage/artworks/test.jpg',
            'description' => 'Test description',
            'artwork_date' => '2026-09-01',
        ]);

        $response = $this->delete(
            route('admin.artworks.destroy', $artwork)
        );

        $response->assertRedirect(route('admin.artworks.index'));

        $this->assertDatabaseMissing('artworks', [
            'id' => $artwork->id,
        ]);
    }
}
