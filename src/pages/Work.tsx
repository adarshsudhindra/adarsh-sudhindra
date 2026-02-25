import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import { experiences, awards, capabilities } from "@/data/profile";

const Work = () => {
  const [filter, setFilter] = useState("");

  const filteredAwards = filter
    ? awards.filter((a) => a.title.toLowerCase().includes(filter.toLowerCase()) || a.organization.toLowerCase().includes(filter.toLowerCase()))
    : awards;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Work & Impact</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Professional Journey</h1>
            <p className="mt-3 text-lg text-muted-foreground">A timeline of roles, contributions, and recognitions.</p>
          </motion.div>

          {/* Experience */}
          <div className="mt-12">
            <SectionHeading title="Experience Timeline" />
            <div className="mt-8">
              {experiences.map((e, i) => (
                <TimelineItem key={e.company + e.title} {...e} index={i} />
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="mt-16">
            <SectionHeading title="Awards & Recognition" />
            <input
              type="text"
              placeholder="Search awards..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="mt-6 w-full max-w-sm rounded-lg border border-input bg-card px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {filteredAwards.map((a, i) => (
                <motion.div key={a.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <p className="text-xs font-medium text-primary">{a.year}</p>
                  <h3 className="mt-1 font-semibold text-sm">{a.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{a.organization}</p>
                  {a.description && <p className="mt-2 text-xs text-muted-foreground">{a.description}</p>}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="mt-16">
            <SectionHeading title="Core Capabilities" />
            <div className="mt-6 flex flex-wrap gap-2">
              {capabilities.map((c) => (
                <span key={c} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Work;
