import { Link } from '@inertiajs/react';
import { FolderPlus, Palette, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { Artwork } from '@/types/artwork';

interface DashboardData {
    stats: {
        artworks: number;
        categories: number;
    };
    recentArtworks: Artwork[];
}

export default function Dashboard() {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/admin/dashboard')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to load dashboard data.');
                }

                return response.json();
            })
            .then((dashboardData: DashboardData) => {
                setData(dashboardData);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <div className="p-6">
            <div>
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Overview of your artwork portfolio.
                </p>
            </div>

            {loading ? (
                <div className="mt-6 text-sm text-gray-500">
                    Loading dashboard...
                </div>
            ) : data ? (
                <>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg border p-5">
                            <div className="flex items-center gap-3">
                                <Palette className="h-5 w-5" />
                                <span className="text-sm text-gray-500">
                                    Artworks
                                </span>
                            </div>

                            <p className="mt-3 text-3xl font-semibold">
                                {data.stats.artworks}
                            </p>
                        </div>

                        <div className="rounded-lg border p-5">
                            <div className="flex items-center gap-3">
                                <FolderPlus className="h-5 w-5" />
                                <span className="text-sm text-gray-500">
                                    Categories
                                </span>
                            </div>

                            <p className="mt-3 text-3xl font-semibold">
                                {data.stats.categories}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">
                                Recent Artworks
                            </h2>

                            <Link
                                href="/admin/artworks"
                                className="text-sm text-blue-600"
                            >
                                View all
                            </Link>
                        </div>

                        <div className="mt-4 space-y-3">
                            {data.recentArtworks.length === 0 ? (
                                <div className="rounded-lg border p-6 text-sm text-gray-500">
                                    No artworks yet.
                                </div>
                            ) : (
                                data.recentArtworks.map((artwork) => (
                                    <div
                                        key={artwork.id}
                                        className="flex items-center justify-between gap-4 rounded-lg border p-4"
                                    >
                                        <div className="flex min-w-0 items-center gap-4">
                                            <img
                                                src={artwork.image}
                                                alt={artwork.title}
                                                className="h-14 w-14 rounded object-cover"
                                            />

                                            <div className="min-w-0">
                                                <p className="truncate font-medium">
                                                    {artwork.title}
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    {artwork.category.name}
                                                </p>
                                            </div>
                                        </div>

                                        <Link
                                            href={`/admin/artworks/${artwork.slug}/edit`}
                                            className="shrink-0 text-sm text-blue-600"
                                        >
                                            Edit
                                        </Link>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div className="mt-6 text-sm text-red-600">
                    Failed to load dashboard data.
                </div>
            )}

            <div className="mt-8">
                <h2 className="text-lg font-semibold">Quick Actions</h2>

                <div className="mt-4 flex flex-wrap gap-3">
                    <Link
                        href="/admin/artworks/create"
                        className="flex items-center gap-2 rounded bg-black px-4 py-2 text-sm text-white"
                    >
                        <Plus className="h-4 w-4" />
                        Create Artwork
                    </Link>

                    <Link
                        href="/admin/categories/create"
                        className="flex items-center gap-2 rounded border px-4 py-2 text-sm"
                    >
                        <FolderPlus className="h-4 w-4" />
                        Create Category
                    </Link>
                </div>
            </div>
        </div>
    );
}
