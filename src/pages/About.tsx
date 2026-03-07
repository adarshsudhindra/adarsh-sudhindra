import { motion } from "framer-motion";

import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { profile, education, principles, capabilities } from "@/data/profile";

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">About</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">The Story So Far</h1>
        </motion.div>

        {/* Executive Summary */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-10 rounded-xl border border-border bg-card p-8">
          <h2 className="text-lg font-semibold">Executive Summary</h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            {profile.summary} With a Master's in Computer Science from the University of Illinois Urbana-Champaign
            and executive education from Kellogg School of Management, I combine technical depth with strategic thinking.
            My career spans IBM Software Labs, Adobe Systems, and a decade at Excelsoft Technologies, where I currently
            lead product and innovation for AI-powered assessment platforms serving millions globally.
          </p>
        </motion.div>

        {/* Now */}
        <div className="mt-12">
          <SectionHeading title="What I'm Focused On Now" />
          <div className="mt-6 rounded-xl border-l-4 border-primary bg-accent/30 p-6">
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Leading product strategy for next-gen AI assessment platforms at Excelsoft</li>
              <li>• Exploring applied AI in marking, item generation, and adaptive testing</li>
              <li>• Speaking at international conferences on trust and integrity in digital exams</li>
              <li>• Mentoring product leaders and contributing to the broader EdTech community</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mt-12">
          <SectionHeading title="Education" />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {education.map((e, i) => (
              <motion.div key={e.institution} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-6"
              >
                <p className="text-xs font-medium text-primary">{e.year}</p>
                <h3 className="mt-1 font-semibold">{e.degree}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{e.institution}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mt-12">
          <SectionHeading title="Operating Principles" subtitle="The beliefs that guide how I work and lead." />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {principles.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="mt-12">
          <SectionHeading title="Toolbox & Capabilities" />
          <div className="mt-6 flex flex-wrap gap-2">
            {capabilities.map((c) => (
              <span key={c} className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">{c}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  </Layout>
);

export default About;
