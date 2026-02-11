import { db } from "./db";
import { projects, skills, experience, type Project, type InsertProject, type Skill, type InsertSkill, type Experience, type InsertExperience } from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getExperience(): Promise<Experience[]>;
  
  // Seed methods
  createProject(project: InsertProject): Promise<Project>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  createExperience(exp: InsertExperience): Promise<Experience>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async getExperience(): Promise<Experience[]> {
    return await db.select().from(experience);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const [newSkill] = await db.insert(skills).values(skill).returning();
    return newSkill;
  }

  async createExperience(exp: InsertExperience): Promise<Experience> {
    const [newExp] = await db.insert(experience).values(exp).returning();
    return newExp;
  }
}

export const storage = new DatabaseStorage();
