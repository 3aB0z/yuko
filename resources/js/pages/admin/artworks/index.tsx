import { Link, router } from '@inertiajs/react';
import { Edit, Plus, Trash2 } from 'lucide-react';
import type { Artwork } from '@/types/artwork';

interface Props {
    artworks: Artwork[];
}

export default function Index({ artworks }: Props) {
    return (
        <div className="p-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Artworks</h1>

                <Link
                    href="/admin/artworks/create"
                    className="flex items-center gap-2 rounded bg-black py-2 pr-4 pl-2 text-white"
                >
                    <Plus /> Create Artwork
                </Link>
            </div>

            <div className="mt-6 space-y-4">
                {artworks.map((artwork) => (
                    <div
                        key={artwork.id}
                        className="flex items-start justify-between gap-4 rounded-lg border p-4"
                    >
                        <div className="flex items-start gap-4">
                            <Link href={`/artwork/${artwork.slug}`}>
                                <img
                                    src={artwork.image}
                                    alt={artwork.title}
                                    className="h-20 w-20 rounded object-cover"
                                />
                            </Link>

                            <div>
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

                        <div className="flex items-center gap-4">
                            <Link
                                href={`/admin/artworks/${artwork.slug}/edit`}
                                className="text-blue-600"
                            >
                                <Edit />
                            </Link>

                            <button
                                type="button"
                                onClick={() => {
                                    if (
                                        window.confirm(
                                            `Delete "${artwork.title}"?`,
                                        )
                                    ) {
                                        router.delete(
                                            `/admin/artworks/${artwork.slug}`,
                                        );
                                    }
                                }}
                                className="text-red-600"
                            >
                                <Trash2 />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
