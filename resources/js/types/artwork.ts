export type ArtworkCategory = 'Drawing' | 'Clay Sculpture';

export interface Artwork {
    id: number;
    slug: string;
    title: string;
    category: ArtworkCategory;
    image: string;
    description: string;
    artwork_date: string;
    started_at?: string;
    completed_at?: string;
    duration?: string;
    price?: number;
}
