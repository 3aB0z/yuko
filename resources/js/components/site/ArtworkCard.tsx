import { Link } from '@inertiajs/react';

interface ArtworkCardProps {
    slug: string;
    title: string;
    category: string;
    image: string;
    href?: string;
    aspect?: string;
}

export default function ArtworkCard({
    slug,
    title,
    category,
    image,
    href = `/artwork/${slug}`,
    aspect = 'aspect-[3/4]',
}: ArtworkCardProps) {
    return (
        <Link href={href} className="group block">
            <div className={`${aspect} overflow-hidden bg-stone`}>
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
            </div>

            <div className="mt-4">
                <h3 className="font-display text-2xl">{title}</h3>

                <p className="mt-1 font-sans text-xs tracking-widest text-muted uppercase">
                    {category}
                </p>
            </div>
        </Link>
    );
}
