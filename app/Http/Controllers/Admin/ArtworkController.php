<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\StoreArtworkRequest;
use App\Http\Requests\UpdateArtworkRequest;
use App\Http\Controllers\Controller;
use App\Models\Artwork;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Gate;


class ArtworkController extends Controller
{
    public function index(): Response
    {
        Gate::authorize('viewAny', Artwork::class);

        return Inertia::render('admin/artworks/index', [
            'artworks' => Artwork::with('category')
                ->orderBy('artwork_date', 'desc')
                ->get(),
        ]);
    }

    public function create(): Response
    {
        Gate::authorize('create', Artwork::class);

        return Inertia::render('admin/artworks/create', [
            'categories' => Category::orderBy('name')->get(),
        ]);
    }

    public function store(StoreArtworkRequest $request): RedirectResponse
    {
        Gate::authorize('create', Artwork::class);

        $validated = $request->validated();

        $validated['image'] = '/storage/' . $request->file('image')->store('artworks', 'public');

        Artwork::create($validated);

        return redirect()->route('admin.artworks.index');
    }

    public function edit(Artwork $artwork): Response
    {
        Gate::authorize('update', $artwork);

        return Inertia::render('admin/artworks/edit', [
            'artwork' => [
                'id' => $artwork->id,
                'slug' => $artwork->slug,
                'title' => $artwork->title,
                'category_id' => $artwork->category_id,
                'image' => $artwork->image,
                'description' => $artwork->description,
                'artwork_date' => $artwork->artwork_date?->format('Y-m-d'),
                'started_at' => $artwork->started_at?->format('Y-m-d'),
                'completed_at' => $artwork->completed_at?->format('Y-m-d'),
                'duration' => $artwork->duration,
                'price' => $artwork->price,
            ],
            'categories' => Category::orderBy('name')->get(),
        ]);
    }

    public function update(UpdateArtworkRequest $request, Artwork $artwork): RedirectResponse
    {
        Gate::authorize('update', $artwork);

        $validated = $request->validated();

        if ($request->hasFile('image')) {
            $newImagePath = $request->file('image')->store('artworks', 'public');

            if ($artwork->image && str_starts_with($artwork->image, '/storage/')) {
                Storage::disk('public')->delete(
                    str_replace('/storage/', '', $artwork->image)
                );
            }

            $validated['image'] = '/storage/' . $newImagePath;
        } else {
            unset($validated['image']);
        }

        $artwork->update($validated);

        return redirect()->route('admin.artworks.index');
    }

    public function destroy(Artwork $artwork): RedirectResponse
    {
        Gate::authorize('delete', $artwork);

        if ($artwork->image && str_starts_with($artwork->image, '/storage/')) {
            Storage::disk('public')->delete(
                str_replace('/storage/', '', $artwork->image)
            );
        }

        $artwork->delete();

        return redirect()->route('admin.artworks.index');
    }
}
