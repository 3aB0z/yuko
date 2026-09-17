<?php

namespace Tests\Feature;

use App\Models\Artwork;
use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryCrudTest extends TestCase
{
    use RefreshDatabase;

    private function admin(): User
    {
        return User::factory()->create([
            'is_admin' => true,
        ]);
    }

    public function test_admin_can_create_category(): void
    {
        $this->actingAs($this->admin());

        $response = $this->post(route('admin.categories.store'), [
            'name' => 'Clay Sculpture',
        ]);

        $response->assertRedirect(route('admin.categories.index'));

        $this->assertDatabaseHas('categories', [
            'name' => 'Clay Sculpture',
            'slug' => 'clay-sculpture',
        ]);
    }

    public function test_duplicate_category_name_is_rejected(): void
    {
        $this->actingAs($this->admin());

        Category::create([
            'name' => 'Drawing',
            'slug' => 'drawing',
        ]);

        $response = $this->post(route('admin.categories.store'), [
            'name' => 'Drawing',
        ]);

        $response->assertSessionHasErrors('name');

        $this->assertDatabaseCount('categories', 1);
    }

    public function test_duplicate_category_slug_is_rejected(): void
    {
        $this->actingAs($this->admin());

        Category::create([
            'name' => 'Drawing',
            'slug' => 'drawing',
        ]);

        $response = $this->post(route('admin.categories.store'), [
            'name' => 'Drawing!',
        ]);

        $response->assertSessionHasErrors('name');

        $this->assertDatabaseCount('categories', 1);
    }

    public function test_admin_can_update_category_name(): void
    {
        $this->actingAs($this->admin());

        $category = Category::create([
            'name' => 'Drawing',
            'slug' => 'drawing',
        ]);

        $response = $this->put(
            route('admin.categories.update', $category),
            [
                'name' => 'Illustration',
            ]
        );

        $response->assertRedirect(route('admin.categories.index'));

        $this->assertDatabaseHas('categories', [
            'id' => $category->id,
            'name' => 'Illustration',
            'slug' => 'drawing',
        ]);
    }

    public function test_category_slug_does_not_change_when_name_is_updated(): void
    {
        $this->actingAs($this->admin());

        $category = Category::create([
            'name' => 'Drawing',
            'slug' => 'drawing',
        ]);

        $this->put(
            route('admin.categories.update', $category),
            [
                'name' => 'Digital Drawing',
            ]
        );

        $this->assertDatabaseHas('categories', [
            'id' => $category->id,
            'name' => 'Digital Drawing',
            'slug' => 'drawing',
        ]);
    }

    public function test_category_used_by_artwork_cannot_be_deleted(): void
    {
        $this->actingAs($this->admin());

        $category = Category::create([
            'name' => 'Drawing',
            'slug' => 'drawing',
        ]);

        Artwork::create([
            'slug' => 'test-artwork',
            'title' => 'Test Artwork',
            'category_id' => $category->id,
            'image' => '/images/artworks/test.jpg',
            'description' => 'Test description',
            'artwork_date' => '2026-09-01',
        ]);

        $response = $this->delete(
            route('admin.categories.destroy', $category)
        );

        $response->assertRedirect(route('admin.categories.index'));

        $this->assertDatabaseHas('categories', [
            'id' => $category->id,
        ]);
    }

    public function test_admin_can_delete_unused_category(): void
    {
        $this->actingAs($this->admin());

        $category = Category::create([
            'name' => 'Unused',
            'slug' => 'unused',
        ]);

        $response = $this->delete(
            route('admin.categories.destroy', $category)
        );

        $response->assertRedirect(route('admin.categories.index'));

        $this->assertDatabaseMissing('categories', [
            'id' => $category->id,
        ]);
    }
}
