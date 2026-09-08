<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArtworkRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'category_id' => ['required', 'exists:categories,id'],
            'image' => ['nullable', 'image', 'max:10240'],
            'description' => ['required', 'string'],
            'artwork_date' => ['required', 'date'],
            'started_at' => ['nullable', 'date'],
            'completed_at' => ['nullable', 'date'],
            'duration' => ['nullable', 'string', 'max:255'],
            'price' => ['nullable', 'numeric', 'min:0'],
        ];
    }
}
