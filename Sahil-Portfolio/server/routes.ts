import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.skills.list.path, async (req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.get(api.experience.list.path, async (req, res) => {
    const exp = await storage.getExperience();
    res.json(exp);
  });

  // Seed data if empty
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    // Seed Projects
    await storage.createProject({
      title: "AI-powered YouTube Thumbnail Generator",
      description: "Automated thumbnail creation using Stable Diffusion and text analysis to generate high-CTR images.",
      techStack: ["Python", "OpenAI API", "React", "FastAPI"],
      githubUrl: "https://github.com/sahil/thumbnail-gen",
      demoUrl: "https://thumbnail-gen.demo",
    });
    
    await storage.createProject({
      title: "Spam Detection Web App",
      description: "Machine learning model to classify emails as spam or ham with 98% accuracy using Naive Bayes.",
      techStack: ["Python", "Scikit-learn", "Flask", "React"],
      githubUrl: "https://github.com/sahil/spam-detection",
    });

    await storage.createProject({
      title: "Text-to-Video YouTube Shorts Generator",
      description: "Converts scripts into short videos using stock footage matching and AI voiceovers.",
      techStack: ["Python", "FFmpeg", "OpenAI API", "MoviePy"],
      githubUrl: "https://github.com/sahil/shorts-gen",
    });

    await storage.createProject({
      title: "Data Processing / ETL Pipeline",
      description: "Scalable pipeline processing 1M+ records daily using Apache Airflow and cleaning raw logs.",
      techStack: ["Python", "SQL", "Airflow", "Docker"],
      githubUrl: "https://github.com/sahil/etl-pipeline",
    });

    await storage.createProject({
      title: "REST API Backend System",
      description: "Robust backend for a social media platform with JWT auth, rate limiting, and role-based access.",
      techStack: ["Node.js", "Express", "PostgreSQL", "Redis"],
      githubUrl: "https://github.com/sahil/social-backend",
    });

    // Seed Skills
    const skillSets = [
      { category: "Programming", names: ["Python", "Java", "C++", "JavaScript"] },
      { category: "Web Development", names: ["HTML", "CSS", "React", "Node.js", "Express"] },
      { category: "Data Engineering", names: ["SQL", "PostgreSQL", "MongoDB", "ETL concepts", "Data Pipelines", "APIs"] },
      { category: "Tools & Platforms", names: ["Git", "GitHub", "Docker", "Linux", "REST APIs"] },
    ];

    for (const set of skillSets) {
      for (const name of set.names) {
        await storage.createSkill({ category: set.category, name });
      }
    }

    // Seed Experience
    await storage.createExperience({
      title: "CSE Student",
      company: "University of Technology",
      duration: "2022 - Present",
      description: "Maintaining 3.8 GPA. Focused on Algorithms, Data Structures, and Database Management Systems. Led the university coding club."
    });

    await storage.createExperience({
      title: "Backend Developer Intern",
      company: "TechCorp Inc.",
      duration: "Summer 2024",
      description: "Optimized API response times by 40% through efficient database indexing and implemented Redis caching strategies for high-traffic endpoints."
    });
  }
}
