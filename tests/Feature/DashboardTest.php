<?php

namespace Tests\Feature;

use App\Models\Artwork;
use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DashboardTest extends TestCase
{
    use RefreshDatabase;

    public function test_guests_are_redirected_to_the_login_page(): void
    {
        $response = $this->get(route('dashboard'));

        $response->assertRedirect(route('login'));
    }

    public function test_admin_users_can_visit_the_dashboard(): void
    {
        $user = User::factory()->create([
            'is_admin' => true,
        ]);

        $this->actingAs($user);

        $response = $this->get(route('dashboard'));

        $response->assertOk();
    }

    public function test_non_admin_users_cannot_visit_the_dashboard(): void
    {
        $user = User::factory()->create([
            'is_admin' => false,
        ]);

        $this->actingAs($user);

        $response = $this->get(route('dashboard'));

        $response->assertForbidden();
    }

    public function test_dashboard_api_returns_current_statistics(): void
    {
        $user = User::factory()->create([
            'is_admin' => true,
        ]);

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

        $this->actingAs($user);

        $response = $this->getJson(route('api.admin.dashboard'));

        $response
            ->assertOk()
            ->assertJsonPath('stats.artworks', 1)
            ->assertJsonPath('stats.categories', 1)
            ->assertJsonCount(1, 'recentArtworks');
    }

    public function test_non_admin_users_cannot_access_dashboard_api(): void
    {
        $user = User::factory()->create([
            'is_admin' => false,
        ]);

        $this->actingAs($user);

        $response = $this->getJson(route('api.admin.dashboard'));

        $response->assertForbidden();
    }
}
