<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArtworkRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'slug' => ['required', 'string', 'max:255', 'unique:artworks,slug'],
            'title' => ['required', 'string', 'max:255'],
            'category' => ['required', 'in:Drawing,Clay Sculpture'],
            'image' => ['required', 'image', 'max:10240'],
            'description' => ['required', 'string'],
            'artwork_date' => ['required', 'date'],
            'started_at' => ['nullable', 'date'],
            'completed_at' => ['nullable', 'date'],
            'duration' => ['nullable', 'string', 'max:255'],
            'price' => ['nullable', 'numeric', 'min:0'],
        ];
    }
}
