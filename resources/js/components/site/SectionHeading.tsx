interface SectionHeadingProps {
    eyebrow?: string;
    title: string;
    description?: string;
}

export default function SectionHeading({
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
    return (
        <div>
            {eyebrow && (
                <p className="mb-4 font-sans text-[13px] tracking-[0.12em] text-terracotta uppercase">
                    {eyebrow}
                </p>
            )}

            <h2 className="font-display text-4xl font-light md:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-6 max-w-2xl text-base leading-[1.8] text-charcoal">
                    {description}
                </p>
            )}
        </div>
    );
}
