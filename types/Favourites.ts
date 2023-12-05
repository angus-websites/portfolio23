type FavouriteSectionItem = {
    id: number;
    title: string;
    content?: string;
}

export type FavouriteSection = {
    id: number;
    title: string;
    items: FavouriteSectionItem[];
}
