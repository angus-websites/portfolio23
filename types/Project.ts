import { Image } from "~/types/Image";
import {Skill} from "~/types/Skill";
import {Tag} from "~/types/Tag";
import {SeoMeta} from "~/types/SeoMeta";

type ProjectImage = {
  cover_image: Image;
  images?: Image[];
}

type NestedTag = {
  relationTo: string;
  value: Tag;
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
  git_link?: string;
  web_link?: string;
  stack: Skill[];
  tags: NestedTag[];
  meta?: SeoMeta;

};
