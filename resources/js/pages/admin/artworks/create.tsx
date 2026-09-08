import { useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Create() {
    const form = useForm({
        slug: '',
        title: '',
        category: 'Drawing',
        image: null as File | null,
        description: '',
        artwork_date: '',
        started_at: '',
        completed_at: '',
        duration: '',
        price: '',
    });

    const [imagePreview, setImagePreview] = useState<string | null>(null);

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0] ?? null;

        form.setData('image', file);

        if (file) {
            setImagePreview(URL.createObjectURL(file));
        } else {
            setImagePreview(null);
        }
    }

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        form.post('/admin/artworks', {
            forceFormData: true,
        });
    }

    return (
        <div className="max-w-3xl p-6">
            <h1 className="text-2xl font-semibold">Create Artwork</h1>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                <div>
                    <label className="block text-sm font-medium">Title</label>

                    <input
                        type="text"
                        value={form.data.title}
                        onChange={(e) => form.setData('title', e.target.value)}
                        className="mt-2 w-full rounded-md border px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Slug</label>

                    <input
                        type="text"
                        value={form.data.slug}
                        onChange={(e) => form.setData('slug', e.target.value)}
                        className="mt-2 w-full rounded-md border px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">
                        Category
                    </label>

                    <select
                        value={form.data.category}
                        onChange={(e) =>
                            form.setData('category', e.target.value)
                        }
                        className="mt-2 w-full rounded-md border px-3 py-2"
                    >
                        <option value="Drawing">Drawing</option>
                        <option value="Clay Sculpture">Clay Sculpture</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium">Image</label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="mt-2 block w-full text-sm"
                    />

                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Artwork preview"
                            className="mt-4 max-h-80 w-auto object-contain"
                        />
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium">
                        Description
                    </label>

                    <textarea
                        value={form.data.description}
                        onChange={(e) =>
                            form.setData('description', e.target.value)
                        }
                        rows={5}
                        className="mt-2 w-full rounded-md border px-3 py-2"
                    />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium">
                            Artwork Date
                        </label>

                        <input
                            type="date"
                            value={form.data.artwork_date}
                            onChange={(e) =>
                                form.setData('artwork_date', e.target.value)
                            }
                            className="mt-2 w-full rounded-md border px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            Duration
                        </label>

                        <input
                            type="text"
                            value={form.data.duration}
                            onChange={(e) =>
                                form.setData('duration', e.target.value)
                            }
                            placeholder="e.g. 5 days"
                            className="mt-2 w-full rounded-md border px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            Started At
                        </label>

                        <input
                            type="date"
                            value={form.data.started_at}
                            onChange={(e) =>
                                form.setData('started_at', e.target.value)
                            }
                            className="mt-2 w-full rounded-md border px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            Completed At
                        </label>

                        <input
                            type="date"
                            value={form.data.completed_at}
                            onChange={(e) =>
                                form.setData('completed_at', e.target.value)
                            }
                            className="mt-2 w-full rounded-md border px-3 py-2"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium">Price</label>

                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={form.data.price}
                        onChange={(e) => form.setData('price', e.target.value)}
                        className="mt-2 w-full rounded-md border px-3 py-2"
                    />
                </div>

                <button
                    type="submit"
                    disabled={form.processing}
                    className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50"
                >
                    {form.processing ? 'Creating...' : 'Create Artwork'}
                </button>
            </form>
        </div>
    );
}
