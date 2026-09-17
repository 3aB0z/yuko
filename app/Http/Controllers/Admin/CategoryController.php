<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Gate;

class CategoryController extends Controller
{
    public function index(): Response
    {
        Gate::authorize('viewAny', Category::class);

        return Inertia::render('admin/categories/index', [
            'categories' => Category::orderBy('name')->get(),
        ]);
    }

    public function create(): Response
    {
        Gate::authorize('create', Category::class);

        return Inertia::render('admin/categories/create');
    }

    public function store(StoreCategoryRequest $request): RedirectResponse
    {
        Gate::authorize('create', Category::class);

        $validated = $request->validated();

        $validated['slug'] = Str::slug($validated['name']);

        if (Category::where('slug', $validated['slug'])->exists()) {
            return back()
                ->withErrors([
                    'name' => 'A category with this name or slug already exists.',
                ])
                ->withInput();
        }

        Category::create($validated);

        return redirect()->route('admin.categories.index');
    }

    public function edit(Category $category): Response
    {
        Gate::authorize('update', $category);

        return Inertia::render('admin/categories/edit', [
            'category' => $category,
        ]);
    }

    public function update(
        UpdateCategoryRequest $request,
        Category $category
    ): RedirectResponse {
        Gate::authorize('update', $category);

        $category->update($request->validated());

        return redirect()->route('admin.categories.index');
    }

    public function destroy(Category $category): RedirectResponse
    {
        Gate::authorize('delete', $category);

        if ($category->artworks()->exists()) {
            return redirect()
                ->route('admin.categories.index')
                ->with('error', 'This category cannot be deleted because it is being used by artworks.');
        }

        $category->delete();

        return redirect()->route('admin.categories.index');
    }
}
