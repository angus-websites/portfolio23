// Project type
import { Image } from "./Image";

export type Employment = {
  id: number;
  employer: string;
  job_title: string;
  start_date: string;
  end_date?: string;
  icon?: Image;
};
