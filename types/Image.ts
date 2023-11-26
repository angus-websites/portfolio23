import {ImageSize} from "~/types/ImageSize";

export type Image = {
    id: string;
    alt: string;
    sizes: { [key: string]: ImageSize };
}