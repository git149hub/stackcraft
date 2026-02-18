import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold font-display mb-2">Let's Build Together</h2>
            <p className="text-muted-foreground max-w-md">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>
          
          <div className="flex md:justify-end gap-4">
            <SocialLink href="https://github.com/git149hub"  icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/sahil-6481952b8/"  icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href="mailto:sahi950812@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sahil. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using React, TypeScript & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
