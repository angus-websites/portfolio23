import { Image } from "~/types/Image";
import {Skill} from "~/types/Skill";

export type Project = {
  id: number;
  slug: string;
  title: string;
  short_description: string;
  long_description?: string;
  cover_image: Image;
  images?: Image[];
  date_created: string;
  git_link?: string;
  web_link?: string;
  stack: Skill[];

};
