import { Link, router } from '@inertiajs/react';
import { Edit, Plus, Search, Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Artwork } from '@/types/artwork';
import type { Category } from '@/types/category';
import type { Paginated } from '@/types/pagination';

interface Props {
    categories: Category[];
}

export default function Index({ categories }: Props) {
    const [artworks, setArtworks] = useState<Paginated<Artwork> | null>(null);
    const [search, setSearch] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    async function loadArtworks() {
        setLoading(true);

        const params = new URLSearchParams({
            page: String(page),
            per_page: '20',
        });

        if (search.trim()) {
            params.set('search', search.trim());
        }

        if (categoryId) {
            params.set('category_id', categoryId);
        }

        try {
            const response = await fetch(
                `/api/admin/artworks?${params.toString()}`,
            );

            if (!response.ok) {
                throw new Error('Failed to load artworks.');
            }

            const data: Paginated<Artwork> = await response.json();

            setArtworks(data);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadArtworks();
    }, [page, categoryId]);

    function handleSearch(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setPage(1);
        loadArtworks();
    }

    return (
        <div className="p-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-semibold">Artworks</h1>

                    {artworks && (
                        <p className="mt-1 text-sm text-gray-500">
                            {artworks.total} artwork
                            {artworks.total === 1 ? '' : 's'}
                        </p>
                    )}
                </div>

                <Link
                    href="/admin/artworks/create"
                    className="flex items-center gap-2 rounded bg-black py-2 pr-4 pl-2 text-white"
                >
                    <Plus className="h-4 w-4" />
                    Create Artwork
                </Link>
            </div>

            <form
                onSubmit={handleSearch}
                className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
                <div className="relative flex-1">
                    <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />

                    <input
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search artworks..."
                        className="w-full rounded border py-2 pr-3 pl-9"
                    />
                </div>

                <select
                    value={categoryId}
                    onChange={(event) => {
                        setCategoryId(event.target.value);
                        setPage(1);
                    }}
                    className="rounded border px-3 py-2"
                >
                    <option value="">All categories</option>

                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                <button
                    type="submit"
                    className="rounded bg-black px-4 py-2 text-white"
                >
                    Search
                </button>
            </form>

            <div className="mt-6 space-y-4">
                {loading ? (
                    <div className="rounded-lg border p-6 text-sm text-gray-500">
                        Loading artworks...
                    </div>
                ) : artworks?.data.length ? (
                    artworks.data.map((artwork) => (
                        <div
                            key={artwork.id}
                            className="flex items-start justify-between gap-4 rounded-lg border p-4"
                        >
                            <div className="flex min-w-0 items-start gap-4">
                                <Link href={`/artwork/${artwork.slug}`}>
                                    <img
                                        src={artwork.image}
                                        alt={artwork.title}
                                        className="h-20 w-20 rounded object-cover"
                                    />
                                </Link>

                                <div className="min-w-0">
                                    <Link href={`/artwork/${artwork.slug}`}>
                                        <h2 className="font-semibold">
                                            {artwork.title}
                                        </h2>
                                    </Link>

                                    <p className="text-sm text-gray-500">
                                        {artwork.category.name}
                                    </p>
                                </div>
                            </div>

                            <div className="flex shrink-0 items-center gap-4">
                                <Link
                                    href={`/admin/artworks/${artwork.slug}/edit`}
                                    className="text-blue-600"
                                >
                                    <Edit className="h-5 w-5" />
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => {
                                        if (
                                            window.confirm(
                                                `Delete "${artwork.title}"?`,
                                            )
                                        ) {
                                            // Keep existing delete endpoint.
                                            // Reload the API data after deletion.
                                            router.delete(
                                                `/admin/artworks/${artwork.slug}`,
                                                {
                                                    onSuccess: () => {
                                                        loadArtworks();
                                                    },
                                                },
                                            );
                                        }
                                    }}
                                    className="text-red-600"
                                >
                                    <Trash2 className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="rounded-lg border p-6 text-sm text-gray-500">
                        No artworks found.
                    </div>
                )}
            </div>

            {artworks && artworks.last_page > 1 && (
                <div className="mt-6 flex items-center justify-between">
                    <button
                        type="button"
                        disabled={page === 1}
                        onClick={() => setPage((current) => current - 1)}
                        className="rounded border px-4 py-2 disabled:opacity-50"
                    >
                        Previous
                    </button>

                    <span className="text-sm text-gray-500">
                        Page {artworks.current_page} of {artworks.last_page}
                    </span>

                    <button
                        type="button"
                        disabled={page === artworks.last_page}
                        onClick={() => setPage((current) => current + 1)}
                        className="rounded border px-4 py-2 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}
