import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { principles, interests } from "@/data/profile";

const Personal = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Personal</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Beyond the Resume</h1>
          <p className="mt-3 text-lg text-muted-foreground">Values, curiosity, and what drives me outside of work.</p>
        </motion.div>

        {/* Values */}
        <div className="mt-12">
          <SectionHeading title="Values I Live By" subtitle="The principles that shape my decisions and actions." />
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {principles.slice(0, 6).map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-xs text-muted-foreground">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning */}
        <div className="mt-12">
          <SectionHeading title="Learning & Curiosity" subtitle="I believe in being a perpetual student." />
          <div className="mt-6 rounded-xl border border-border bg-card p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm deeply curious about how systems work — whether it's an AI model, a product organization,
              or a chess position. I read widely across technology, business strategy, behavioral science,
              and philosophy. I believe that the best product leaders are those who never stop learning and
              who bring cross-domain perspectives to their work.
            </p>
          </div>
        </div>

        {/* Interests */}
        <div className="mt-12">
          <SectionHeading title="Beyond Work" />
          <div className="mt-6 flex flex-wrap gap-2">
            {interests.map((i) => (
              <span key={i} className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors">
                {i}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Personal;
