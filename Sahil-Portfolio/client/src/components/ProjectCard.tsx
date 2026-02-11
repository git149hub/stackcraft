import { motion } from "framer-motion";
import { type Project } from "@shared/schema";
import { Github, ExternalLink, Folder } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  // Use placeholder if no image
  const bgImage = project.imageUrl || "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all duration-300"
    >
      {/* Image Overlay */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent z-10" />
        {/* Descriptive alt text for Unsplash placeholder: Code editor screen with dark theme */}
        <img
          src={bgImage}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <div className="w-10 h-10 rounded-xl bg-background/90 backdrop-blur border border-white/10 flex items-center justify-center shadow-lg">
            <Folder className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>

      <div className="p-6 relative z-20 -mt-12">
        <div className="bg-background/80 backdrop-blur-md rounded-xl p-6 border border-white/5 shadow-xl">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.slice(0, 4).map((tech) => (
              <span key={tech} className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary">
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <span className="text-xs font-mono px-2 py-1 rounded bg-secondary text-muted-foreground">
                +{project.techStack.length - 4}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 text-sm font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
