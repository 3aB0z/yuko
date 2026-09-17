<?php

namespace Tests\Feature;

use App\Models\Artwork;
use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ArtworkApiTest extends TestCase
{
    use RefreshDatabase;

    private function admin(): User
    {
        return User::factory()->create([
            'is_admin' => true,
        ]);
    }

    private function category(
        string $name = 'Drawing',
        string $slug = 'drawing'
    ): Category {
        return Category::create([
            'name' => $name,
            'slug' => $slug,
        ]);
    }

    private function artwork(
        Category $category,
        string $title,
        string $slug
    ): Artwork {
        return Artwork::create([
            'slug' => $slug,
            'title' => $title,
            'category_id' => $category->id,
            'image' => '/images/artworks/test.jpg',
            'description' => 'Test description',
            'artwork_date' => '2026-09-01',
        ]);
    }

    public function test_admin_can_get_paginated_artworks(): void
    {
        $this->actingAs($this->admin());

        $category = $this->category();

        $this->artwork($category, 'Artwork One', 'artwork-one');
        $this->artwork($category, 'Artwork Two', 'artwork-two');

        $response = $this->getJson(
            route('api.admin.artworks', [
                'per_page' => 1,
            ])
        );

        $response
            ->assertOk()
            ->assertJsonPath('total', 2)
            ->assertJsonPath('per_page', 1)
            ->assertJsonCount(1, 'data');
    }

    public function test_artworks_can_be_searched_by_title(): void
    {
        $this->actingAs($this->admin());

        $category = $this->category();

        $this->artwork($category, 'Blue Flower', 'blue-flower');
        $this->artwork($category, 'Red Figure', 'red-figure');

        $response = $this->getJson(
            route('api.admin.artworks', [
                'search' => 'Blue',
            ])
        );

        $response
            ->assertOk()
            ->assertJsonPath('total', 1)
            ->assertJsonPath('data.0.title', 'Blue Flower');
    }

    public function test_artworks_can_be_filtered_by_category(): void
    {
        $this->actingAs($this->admin());

        $drawing = $this->category();
        $sculpture = $this->category(
            'Clay Sculpture',
            'clay-sculpture'
        );

        $this->artwork($drawing, 'Drawing One', 'drawing-one');
        $this->artwork($sculpture, 'Sculpture One', 'sculpture-one');

        $response = $this->getJson(
            route('api.admin.artworks', [
                'category_id' => $sculpture->id,
            ])
        );

        $response
            ->assertOk()
            ->assertJsonPath('total', 1)
            ->assertJsonPath('data.0.title', 'Sculpture One');
    }

    public function test_non_admin_users_cannot_access_artwork_api(): void
    {
        $user = User::factory()->create([
            'is_admin' => false,
        ]);

        $this->actingAs($user);

        $response = $this->getJson(
            route('api.admin.artworks')
        );

        $response->assertForbidden();
    }

    public function test_guests_cannot_access_artwork_api(): void
    {
        $response = $this->getJson(
            route('api.admin.artworks')
        );

        $response->assertUnauthorized();
    }
}
