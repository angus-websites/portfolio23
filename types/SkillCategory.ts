import {Skill} from "~/types/Skill";

export type SkillCategory = {
    id: number;
    title: string;
    skills: Skill[];
}
