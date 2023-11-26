import {Skill} from "~/types/Skill";

export type SkillCategory = {
    id: number;
    name: string;
    skills: Skill[];
}
