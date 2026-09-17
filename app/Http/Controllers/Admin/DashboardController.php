<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Artwork;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        Gate::authorize('viewAny', Artwork::class);

        return Inertia::render('dashboard');
    }

    public function data(): JsonResponse
    {
        Gate::authorize('viewAny', Artwork::class);

        return response()->json([
            'stats' => [
                'artworks' => Artwork::count(),
                'categories' => Category::count(),
            ],
            'recentArtworks' => Artwork::with('category')
                ->orderByDesc('created_at')
                ->limit(5)
                ->get(),
        ]);
    }
}
