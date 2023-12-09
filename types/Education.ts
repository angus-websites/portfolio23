// Project type
import {Image} from "~/types/Image";

export type Education = {
  id: number;
  school: string;
  level: string;
  grade?: string;
  start_date: string;
  end_date?: string;
  icon?: Image;
};
