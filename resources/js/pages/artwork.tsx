import { Head, Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import type { Artwork } from '@/types/artwork';
import { formatDate } from '@/utils/date';

interface ArtworkProps {
    artwork: Artwork;
}

export default function Artwork({ artwork }: ArtworkProps) {
    return (
        <>
            <Head title={artwork.title} />

            <main className="mx-auto max-w-300 px-6 pt-36 pb-24 md:pt-40 md:pb-30">
                <Link
                    href="/gallery"
                    className="flex items-center gap-1 font-sans text-[13px] tracking-widest text-muted uppercase transition-colors hover:text-terracotta"
                >
                    <ArrowLeft size={12} /> Back to Gallery
                </Link>

                <div className="mt-12 grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
                    <div>
                        <img
                            src={artwork.image}
                            alt={artwork.title}
                            className="h-auto w-full object-contain"
                        />
                    </div>

                    <div>
                        <p className="font-sans text-[13px] tracking-[0.12em] text-terracotta uppercase">
                            {artwork.category.name}
                        </p>

                        <h1 className="mt-3 font-display text-5xl leading-none font-light md:text-[64px]">
                            {artwork.title}
                        </h1>

                        <p className="mt-8 max-w-lg leading-[1.8] text-charcoal">
                            {artwork.description}
                        </p>

                        <div className="mt-10 border-t border-stone pt-6">
                            <dl className="space-y-4 text-sm">
                                <div className="flex justify-between gap-6">
                                    <dt className="text-muted">Artwork date</dt>
                                    <dd>{formatDate(artwork.artwork_date)}</dd>
                                </div>

                                {artwork.started_at && (
                                    <div className="flex justify-between gap-6">
                                        <dt className="text-muted">Started</dt>
                                        <dd>
                                            {formatDate(artwork.started_at)}
                                        </dd>
                                    </div>
                                )}

                                {artwork.completed_at && (
                                    <div className="flex justify-between gap-6">
                                        <dt className="text-muted">
                                            Completed
                                        </dt>
                                        <dd>
                                            {formatDate(artwork.completed_at)}
                                        </dd>
                                    </div>
                                )}

                                {artwork.duration && (
                                    <div className="flex justify-between gap-6">
                                        <dt className="text-muted">Duration</dt>
                                        <dd>{artwork.duration}</dd>
                                    </div>
                                )}

                                {artwork.price !== undefined && (
                                    <div className="flex justify-between gap-6">
                                        <dt className="text-muted">Price</dt>
                                        <dd>
                                            {artwork.price > 0
                                                ? `${artwork.price} MAD`
                                                : 'Not for sale'}
                                        </dd>
                                    </div>
                                )}
                            </dl>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
