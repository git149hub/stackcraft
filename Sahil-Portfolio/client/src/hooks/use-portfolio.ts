import { projects, skills, experience } from "@/data/portfolio-data";

export function useProjects() {
  return {
    data: projects,
    isLoading: false,
  };
}

export function useSkills() {
  return {
    data: skills,
    isLoading: false,
  };
}

export function useExperience() {
  return {
    data: experience,
    isLoading: false,
  };
}

