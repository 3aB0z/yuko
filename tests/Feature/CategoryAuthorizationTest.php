<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CategoryAuthorizationTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_access_categories(): void
    {
        $user = User::factory()->create([
            'is_admin' => true,
        ]);

        $this->actingAs($user);

        $response = $this->get(route('admin.categories.index'));

        $response->assertOk();
    }

    public function test_non_admin_cannot_access_categories(): void
    {
        $user = User::factory()->create([
            'is_admin' => false,
        ]);

        $this->actingAs($user);

        $response = $this->get(route('admin.categories.index'));

        $response->assertForbidden();
    }
}
