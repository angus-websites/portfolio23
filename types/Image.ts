import {ImageSize} from "~/types/ImageSize";

export type Image = {
    id: string;
    alt: string;
    sizes: ImageSize[];
}