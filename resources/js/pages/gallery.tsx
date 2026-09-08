import { Head } from '@inertiajs/react';
import { useState } from 'react';
import ArtworkCard from '@/components/site/ArtworkCard';
import type { Artwork } from '@/types/artwork';

interface GalleryProps {
    artworks: Artwork[];
}

type Filter = 'All' | 'Drawing' | 'Clay Sculpture';

export default function Gallery({ artworks }: GalleryProps) {
    const [filter, setFilter] = useState<Filter>('All');

    const filteredArtworks =
        filter === 'All'
            ? artworks
            : artworks.filter((artwork) => artwork.category === filter);

    return (
        <>
            <Head title="Gallery" />
            <main className="mx-auto max-w-300 px-6 pt-36 pb-24 md:pt-40 md:pb-30">
                {/* Page heading */}
                <div className="max-w-3xl">
                    <p className="mb-5 font-sans text-[13px] tracking-[0.12em] text-terracotta uppercase">
                        The Collection
                    </p>

                    <h1 className="font-display text-5xl leading-none font-light md:text-[64px]">
                        Gallery
                    </h1>

                    <p className="mt-8 max-w-2xl text-base leading-[1.8] text-charcoal">
                        A collection of drawings and handmade clay figures,
                        created slowly and thoughtfully in the studio.
                    </p>
                </div>

                {/* Filters */}
                <div className="mt-16 flex flex-wrap gap-8 border-b border-stone pb-4">
                    {(['All', 'Drawing', 'Clay Sculpture'] as Filter[]).map(
                        (option) => (
                            <button
                                key={option}
                                type="button"
                                onClick={() => setFilter(option)}
                                className={`pb-1 font-sans text-[13px] tracking-widest uppercase transition-colors duration-300 ${
                                    filter === option
                                        ? 'border-b border-terracotta text-terracotta'
                                        : 'text-muted hover:text-ink'
                                }`}
                            >
                                {option}
                            </button>
                        ),
                    )}
                </div>

                {/* Artwork grid */}
                <div className="mt-12 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                    {filteredArtworks.map((artwork) => (
                        <ArtworkCard
                            key={artwork.id}
                            slug={artwork.slug}
                            title={artwork.title}
                            category={artwork.category}
                            image={artwork.image}
                        />
                    ))}
                </div>

                {filteredArtworks.length === 0 && (
                    <div className="py-24 text-center">
                        <p className="font-display text-2xl text-muted">
                            No artworks in this collection yet.
                        </p>
                    </div>
                )}
            </main>
        </>
    );
}
