import { Image } from "~/types/Image";
import {Skill} from "~/types/Skill";
import {Tag} from "~/types/Tag";
import {SeoMeta} from "~/types/SeoMeta";

type NestedProjectImage = {
  id: string
  image: Image;
}

type ProjectImage = {
  cover_image: Image;
  images?: NestedProjectImage[];
}

type NestedTag = {
  relationTo: string;
  value: Tag;
}

type NestedStackItem = {
  relationTo: string;
  value: Skill;
}

type ProjectLinks = {
    git_link?: string;
    web_link?: string;
}

export type Project = {
  id: number;
  coming_soon: boolean;
  slug: string;
  title: string;
  short_description: string;
  medium_description?: string;
  long_description?: string;
  images: ProjectImage
  date_created: string;
  links: ProjectLinks
  stack: NestedStackItem[];
  tags: NestedTag[];
  highlights: string[];
  meta?: SeoMeta;

};
