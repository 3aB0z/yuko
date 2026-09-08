import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import type { AdminArtwork } from '@/types/artwork';
import type { Category } from '@/types/category';

interface Props {
    artwork: AdminArtwork;
    categories: Category[];
}

export default function Edit({ artwork, categories }: Props) {
    const form = useForm({
        _method: 'put' as const,
        slug: artwork.slug,
        title: artwork.title,
        category_id: artwork.category_id,
        image: null as File | null,
        description: artwork.description,
        artwork_date: artwork.artwork_date,
        started_at: artwork.started_at ?? '',
        completed_at: artwork.completed_at ?? '',
        duration: artwork.duration ?? '',
        price: artwork.price?.toString() ?? '',
    });

    const [imagePreview, setImagePreview] = useState<string>(artwork.image);

    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0] ?? null;

        form.setData('image', file);

        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    }

    function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        form.post(`/admin/artworks/${artwork.slug}`, {
            forceFormData: true,
        });
    }

    return (
        <div className="max-w-3xl p-6">
            <h1 className="text-2xl font-semibold">Edit Artwork</h1>

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
                        value={artwork.slug}
                        readOnly
                        className="mt-2 w-full rounded-md border bg-gray-100 px-3 py-2"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">
                        Category
                    </label>

                    <select
                        value={form.data.category_id}
                        onChange={(e) =>
                            form.setData('category_id', Number(e.target.value))
                        }
                        className="mt-2 w-full rounded-md border px-3 py-2"
                    >
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
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
                            alt={artwork.title}
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
                    {form.processing ? 'Saving...' : 'Save Changes'}
                </button>
            </form>
        </div>
    );
}
