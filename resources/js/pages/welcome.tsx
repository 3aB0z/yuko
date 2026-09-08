import { Head, Link } from '@inertiajs/react';
import ArtworkCard from '@/components/site/ArtworkCard';
import SectionHeading from '@/components/site/SectionHeading';
import type { Artwork } from '@/types/artwork';

interface WelcomeProps {
    artworks: Artwork[];
}

export default function Welcome({ artworks }: WelcomeProps) {
    return (
        <>
            <Head title="Artist Portfolio" />
            <main>
                {/* Hero */}
                <section className="pt-32 pb-20 md:pt-40 md:pb-24">
                    <div className="mx-auto grid max-w-300 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
                        <div>
                            <p className="mb-6 font-sans text-[13px] tracking-[0.16em] text-terracotta uppercase">
                                Artist · Sculptor
                            </p>

                            <h1 className="max-w-xl font-display text-5xl leading-[0.95] font-light md:text-[64px]">
                                Art made by hand,
                                <br />
                                meant to be felt.
                            </h1>

                            <p className="mt-8 max-w-md text-base leading-[1.7] text-charcoal">
                                Drawings and handmade clay figures exploring
                                character, emotion, and the quiet details of
                                everyday life.
                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link
                                    href="/gallery"
                                    className="inline-flex h-12 items-center bg-terracotta px-7 font-sans text-[13px] tracking-widest text-white uppercase transition-transform duration-300 hover:-translate-y-px"
                                >
                                    Explore the Gallery
                                </Link>

                                <Link
                                    href="/about"
                                    className="inline-flex h-12 items-center border border-ink px-7 font-sans text-[13px] tracking-widest uppercase transition-colors duration-300 hover:bg-ink hover:text-white"
                                >
                                    About the Artist
                                </Link>
                            </div>
                        </div>

                        {/* Hero artwork placeholder */}
                        <div className="relative">
                            <div className="aspect-4/5 min-h-125 overflow-hidden bg-stone md:min-h-162.5">
                                <img
                                    src="/images/artworks/artwork-1.jpg"
                                    alt="Featured Work"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <p className="mt-4 font-sans text-xs tracking-[0.12em] text-muted uppercase">
                                Featured work · 2026
                            </p>
                        </div>
                    </div>
                </section>

                {/* Introduction */}
                <section className="border-y border-stone bg-[#f5f1ec] py-24 md:py-30">
                    <div className="mx-auto max-w-300 px-6">
                        <p className="font-sans text-[13px] tracking-[0.12em] text-terracotta uppercase">
                            The Studio
                        </p>

                        <div className="mt-8 grid gap-12 md:grid-cols-[1fr_2fr]">
                            <div className="overflow-hidden bg-stone">
                                <img
                                    src="/images/studio.png"
                                    alt="The artist's studio"
                                    className="h-auto w-full object-cover"
                                />
                            </div>

                            <div>
                                <SectionHeading
                                    title="A collection of drawings and small sculptural worlds."
                                    description="Each piece begins with curiosity and develops slowly through drawing, modelling, texture, and detail."
                                />

                                <Link
                                    href="/about"
                                    className="mt-8 inline-block border-b border-ink pb-1 font-sans text-[13px] tracking-widest uppercase"
                                >
                                    Discover the story
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Selected Works */}
                <section className="mx-auto max-w-300 px-6 py-24 md:py-30">
                    <div className="flex items-end justify-between gap-8">
                        <div>
                            <p className="mb-4 font-sans text-[13px] tracking-[0.12em] text-terracotta uppercase">
                                Selected Works
                            </p>

                            <h2 className="font-display text-4xl font-light md:text-5xl">
                                Recent creations
                            </h2>
                        </div>

                        <Link
                            href="/gallery"
                            className="hidden border-b border-ink pb-1 font-sans text-[13px] tracking-widest uppercase md:block"
                        >
                            View all
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-8 md:grid-cols-3">
                        {artworks.slice(0, 3).map((artwork) => (
                            <ArtworkCard
                                key={artwork.id}
                                slug={artwork.slug}
                                title={artwork.title}
                                category={artwork.category}
                                image={artwork.image}
                            />
                        ))}
                    </div>

                    <Link
                        href="/gallery"
                        className="mt-10 inline-block border-b border-ink pb-1 font-sans text-[13px] tracking-widest uppercase md:hidden"
                    >
                        View all works
                    </Link>
                </section>

                {/* Closing CTA */}
                <section className="bg-ink px-6 py-24 text-ivory md:py-30">
                    <div className="mx-auto max-w-300">
                        <p className="mb-5 font-sans text-[13px] tracking-[0.12em] text-clay uppercase">
                            Get in touch
                        </p>

                        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
                            <h2 className="max-w-2xl font-display text-4xl leading-tight font-light md:text-6xl">
                                Have a piece in mind?
                            </h2>

                            <Link
                                href="/contact"
                                className="inline-flex h-12 w-fit items-center bg-terracotta px-7 font-sans text-[13px] tracking-widest text-white uppercase"
                            >
                                Contact the Artist
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
