import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  alignment?: "left" | "center";
}

export function SectionHeading({ title, subtitle, alignment = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${alignment === "center" ? "text-center" : "text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-primary font-semibold tracking-wider uppercase text-sm"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold mt-2"
      >
        {title}
      </motion.h2>
      <div className={`h-1.5 w-20 bg-primary mt-4 rounded-full ${alignment === "center" ? "mx-auto" : ""}`} />
    </div>
  );
}
