<?php

namespace App\Http\Controllers;

use App\Models\Artwork;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ArtworkController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('welcome', [
            'artworks' => Artwork::orderBy('artwork_date', 'desc')->get(),
        ]);
    }

    public function index(): Response
    {
        return Inertia::render('gallery', [
            'artworks' => Artwork::orderBy('artwork_date', 'desc')->get(),
        ]);
    }

    public function show(string $slug): Response
    {
        return Inertia::render('artwork', [
            'artwork' => Artwork::where('slug', $slug)->firstOrFail(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'slug' => ['required', 'string', 'max:255', 'unique:artworks,slug'],
            'title' => ['required', 'string', 'max:255'],
            'category' => ['required', 'in:Drawing,Clay Sculpture'],
            'image' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'artwork_date' => ['required', 'date'],
            'started_at' => ['nullable', 'date'],
            'completed_at' => ['nullable', 'date'],
            'duration' => ['nullable', 'string', 'max:255'],
            'price' => ['nullable', 'numeric', 'min:0'],
        ]);

        Artwork::create($validated);

        return redirect()->back();
    }

    public function update(Request $request, Artwork $artwork): RedirectResponse
    {
        $validated = $request->validate([
            'slug' => [
                'required',
                'string',
                'max:255',
                'unique:artworks,slug,' . $artwork->id,
            ],
            'title' => ['required', 'string', 'max:255'],
            'category' => ['required', 'in:Drawing,Clay Sculpture'],
            'image' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string'],
            'artwork_date' => ['required', 'date'],
            'started_at' => ['nullable', 'date'],
            'completed_at' => ['nullable', 'date'],
            'duration' => ['nullable', 'string', 'max:255'],
            'price' => ['nullable', 'numeric', 'min:0'],
        ]);

        $artwork->update($validated);

        return redirect()->back();
    }

    public function destroy(Artwork $artwork): RedirectResponse
    {
        $artwork->delete();

        return redirect()->back();
    }
}
