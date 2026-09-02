export interface Artwork {
    title: string;
    category: 'Drawing' | 'Clay Sculpture';
    image: string;
}

export const artworks: Artwork[] = [
    {
        title: 'Artwork 1',
        category: 'Drawing',
        image: '/images/artworks/artwork-1.jpg',
    },
    {
        title: 'Artwork 2',
        category: 'Clay Sculpture',
        image: '/images/artworks/artwork-2.jpg',
    },
    {
        title: 'Artwork 3',
        category: 'Drawing',
        image: '/images/artworks/artwork-3.jpg',
    },
];
