<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArtworkController;

Route::get('/', [ArtworkController::class, 'home'])->name('home');
Route::get('/gallery', [ArtworkController::class, 'index'])->name('gallery');
Route::get('/artwork/{slug}', [ArtworkController::class, 'show'])->name('artwork.show');
Route::inertia('/about', 'about')->name('about');
Route::inertia('/contact', 'contact')->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::middleware('admin')->group(function () {
        Route::inertia('dashboard', 'dashboard')->name('dashboard');

        Route::get('/admin/artworks', [\App\Http\Controllers\Admin\ArtworkController::class, 'index'])
            ->name('admin.artworks.index');

        Route::get('/admin/artworks/create', [\App\Http\Controllers\Admin\ArtworkController::class, 'create'])
            ->name('admin.artworks.create');

        Route::post('/admin/artworks', [\App\Http\Controllers\Admin\ArtworkController::class, 'store'])
            ->name('admin.artworks.store');

        Route::get('/admin/artworks/{artwork:slug}/edit', [\App\Http\Controllers\Admin\ArtworkController::class, 'edit'])
            ->name('admin.artworks.edit');

        Route::put('/admin/artworks/{artwork:slug}', [\App\Http\Controllers\Admin\ArtworkController::class, 'update'])
            ->name('admin.artworks.update');

        Route::delete('/admin/artworks/{artwork:slug}', [\App\Http\Controllers\Admin\ArtworkController::class, 'destroy'])
            ->name('admin.artworks.destroy');
    });
});

require __DIR__.'/settings.php';
