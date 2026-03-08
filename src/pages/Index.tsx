import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Target, Lightbulb, Users } from "lucide-react";
import Layout from "@/components/Layout";
import profilePhoto from "@/assets/profile-opt.webp";
import MetricCard from "@/components/MetricCard";
import SectionHeading from "@/components/SectionHeading";

import TimelineItem from "@/components/TimelineItem";
import { profile, metrics, pillars, experiences, interests } from "@/data/profile";

const iconMap: Record<string, React.ElementType> = { Brain, Shield, Target, Lightbulb, Users };

const Index = () => {
  const recentExperiences = experiences.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-10">
            
            <div className="flex-1">
              <p className="text-sm font-medium uppercase tracking-widest text-primary">Welcome</p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <div className="mt-4 max-w-2xl">
                <p className="text-lg text-muted-foreground md:text-xl">Chief Innovation Officer @ Excelsoft Technologies</p>
                <p className="text-base text-muted-foreground md:text-lg">Technologist | Innovator | Entrepreneur | TEDx Speaker</p>
              </div>
              <p className="mt-4 text-base text-muted-foreground max-w-xl leading-relaxed">
                {profile.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  
                  View My Work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/writing"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted">
                  
                  Read My Posts
                </Link>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="shrink-0">
              
              <img
                src={profilePhoto}
                alt="Adarsh Sudhindra"
                width={256}
                height={256}
                className="h-48 w-48 md:h-64 md:w-64 rounded-full object-cover border-4 border-primary/20 shadow-xl" />
              
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding">
        <div className="container-wide">
          <SectionHeading title="At a Glance" subtitle="Key highlights from my career journey." />
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {metrics.map((m, i) =>
            <MetricCard key={m.label} label={m.label} value={m.value} index={i} />
            )}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <SectionHeading title="What I'm Known For" subtitle="Signature themes across my work and leadership." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {pillars.map((p, i) => {
              const Icon = iconMap[p.icon] || Brain;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
                  
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold">{p.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.description}</p>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Career snapshot */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading title="Career Snapshot" subtitle="Recent roles and contributions." />
          <div className="mt-10">
            {recentExperiences.map((e, i) =>
            <TimelineItem key={e.company + e.title} {...e} index={i} />
            )}
          </div>
          <Link to="/work" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            See full timeline <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>


      {/* Personal */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading title="Beyond Work" subtitle="Values, curiosity, and a lifelong learning mindset." />
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {interests.map((i) =>
            <span key={i} className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors">
                {i}
              </span>
            )}
          </div>
          <Link to="/personal" className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            Learn more about me <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </Layout>);

};

export default Index;