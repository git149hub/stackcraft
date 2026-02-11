import { motion } from "framer-motion";
import { type Skill } from "@shared/schema";
import { Terminal, Layout, Database, Wrench } from "lucide-react";

interface SkillCardProps {
  category: string;
  skills: Skill[];
  delay: number;
}

const icons: Record<string, React.ReactNode> = {
  "Programming": <Terminal className="w-6 h-6 text-primary" />,
  "Web Development": <Layout className="w-6 h-6 text-purple-400" />,
  "Data Engineering": <Database className="w-6 h-6 text-emerald-400" />,
  "Tools & Platforms": <Wrench className="w-6 h-6 text-orange-400" />,
  "ML & Tools": <Wrench className="w-6 h-6 text-orange-400" />,
  "Core CS": <Terminal className="w-6 h-6 text-primary" />,
};

export function SkillCard({ category, skills, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors group"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-background border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {icons[category] || <Terminal className="w-6 h-6" />}
        </div>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="px-3 py-1.5 rounded-lg bg-background border border-white/5 text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
