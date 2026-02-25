import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/profile";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

const Projects = () => {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Projects</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Impact Portfolio</h1>
            <p className="mt-3 text-lg text-muted-foreground">Key initiatives and their outcomes.</p>
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2">
            {["All", ...allTags].map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.title} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
