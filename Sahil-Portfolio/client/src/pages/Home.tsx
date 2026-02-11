import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillCard } from "@/components/SkillCard";
import { ProjectCard } from "@/components/ProjectCard";
import { useProjects, useSkills, useExperience } from "@/hooks/use-portfolio";
import { ArrowDown, Code2, Database, Layout, Server, Briefcase } from "lucide-react";

export default function Home() {
  const { data: projects, isLoading: projectsLoading } = useProjects();
  const { data: skills, isLoading: skillsLoading } = useSkills();
  const { data: experience, isLoading: experienceLoading } = useExperience();

  // Group skills by category
  const skillsByCategory = skills?.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = [
    "Programming",
    "Web Development",
    "Data Engineering",
    "Tools & Platforms"
  ];

  if (projectsLoading || skillsLoading || experienceLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground font-mono animate-pulse">Initializing System...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="about" className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-white/5 text-sm font-medium text-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Open to work
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight mb-6">
                Hi, I'm <span className="text-gradient-primary">Sahil</span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light mb-8">
                Aspiring SDE & <br className="hidden lg:block" />
                Data Engineer
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
                Focused on problem-solving, backend systems, data pipelines, and building scalable applications that make a difference.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-xl bg-secondary text-foreground font-semibold border border-white/5 hover:bg-secondary/80 transition-all duration-300"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>

            {/* Abstract Tech Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl" />
                <div className="relative z-10 grid grid-cols-2 gap-6">
                  <FeatureCard icon={<Server className="w-8 h-8 text-primary" />} title="Backend Systems" />
                  <FeatureCard icon={<Database className="w-8 h-8 text-emerald-400" />} title="Data Pipelines" className="mt-12" />
                  <FeatureCard icon={<Code2 className="w-8 h-8 text-purple-400" />} title="Clean Code" />
                  <FeatureCard icon={<Layout className="w-8 h-8 text-orange-400" />} title="Scalable Apps" className="mt-12" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.a
          href="#skills"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Technical Arsenal" subtitle="Skills & Expertise" />
          
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, idx) => (
              skillsByCategory?.[category] && (
                <SkillCard
                  key={category}
                  category={category}
                  skills={skillsByCategory[category]}
                  delay={idx * 0.1}
                />
              )
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Featured Projects" subtitle="What I've Built" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Journey So Far" subtitle="Experience & Learning" alignment="center" />
          
          <div className="space-y-8 mt-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {experience?.map((exp, idx) => (
              <ExperienceItem key={exp.id} experience={exp} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur border border-white/5 rounded-3xl p-12 shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Collaborate?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm actively looking for Software Development Engineer and Data Engineering roles.
            </p>
            <a
              href="mailto:sahil@example.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FeatureCard({ icon, title, className = "" }: { icon: React.ReactNode; title: string; className?: string }) {
  return (
    <div className={`glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 transition-colors ${className}`}>
      <div className="p-3 bg-background rounded-xl border border-white/5 shadow-inner">
        {icon}
      </div>
      <span className="font-semibold text-sm">{title}</span>
    </div>
  );
}

function ExperienceItem({ experience, index }: { experience: any; index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${isEven ? 'text-left' : 'text-left md:text-right'}`}>
      
      {/* Icon Node */}
      <div className="absolute left-0 md:left-1/2 w-10 h-10 -ml-5 md:-ml-5 rounded-full bg-card border-4 border-background shadow-xl flex items-center justify-center z-10 group-hover:scale-110 group-hover:border-primary transition-all duration-300">
        <Briefcase className="w-4 h-4 text-primary" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] ml-12 md:ml-0 p-6 rounded-2xl bg-card border border-white/5 hover:border-white/10 transition-colors shadow-lg ${!isEven ? 'md:mr-10' : 'md:ml-10'}`}
      >
        <div className="flex flex-col gap-1 mb-2">
          <span className="text-primary text-sm font-mono font-semibold">{experience.duration}</span>
          <h3 className="text-xl font-bold">{experience.title}</h3>
          <p className="text-muted-foreground font-medium">{experience.company}</p>
        </div>
        <p className="text-muted-foreground/80 text-sm leading-relaxed">
          {experience.description}
        </p>
      </motion.div>
    </div>
  );
}
