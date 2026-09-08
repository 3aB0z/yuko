import { Head, Link } from '@inertiajs/react';

export default function About() {
    return (
        <>
            <Head title="About" />

            <main className="mx-auto max-w-300 px-6 pt-36 pb-24 md:pt-40 md:pb-30">
                <div>
                    <p className="font-sans text-[13px] tracking-[0.12em] text-terracotta uppercase">
                        About the Artist
                    </p>

                    <div className="mt-8 grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
                        <div className="overflow-hidden bg-stone">
                            <img
                                src="/images/about.jpg"
                                alt="The artist"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div>
                            <h1 className="font-display text-5xl leading-none font-light md:text-[64px]">
                                Making small worlds by hand.
                            </h1>

                            <div className="mt-10 max-w-2xl space-y-6 text-base leading-[1.8] text-charcoal">
                                <p>
                                    My work explores drawing and handmade clay
                                    figures through a slow and curious process.
                                </p>

                                <p>
                                    Each piece begins as an idea and develops
                                    through experimentation, texture, form, and
                                    detail.
                                </p>

                                <p>
                                    This portfolio is a collection of the pieces
                                    created along the way.
                                </p>
                            </div>

                            <Link
                                href="/gallery"
                                className="mt-10 inline-block border-b border-ink pb-1 font-sans text-[13px] tracking-widest uppercase transition-colors hover:border-terracotta hover:text-terracotta"
                            >
                                View the Gallery
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
