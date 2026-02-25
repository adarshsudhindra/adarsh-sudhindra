import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  problem: string;
  impact: string;
  tags: string[];
  role?: string;
  index: number;
}

const ProjectCard = ({ title, problem, impact, tags, role, index }: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30"
  >
    <div className="flex flex-wrap gap-2 mb-3">
      {tags.map((t) => (
        <span key={t} className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
          {t}
        </span>
      ))}
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    {role && <p className="text-xs font-medium text-primary mt-1">{role}</p>}
    <p className="mt-2 text-sm text-muted-foreground">{problem}</p>
    <div className="mt-4 rounded-lg bg-accent/50 p-3">
      <p className="text-xs font-medium text-accent-foreground">Impact</p>
      <p className="text-sm font-medium mt-0.5">{impact}</p>
    </div>
  </motion.div>
);

export default ProjectCard;
