import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { talks, speakerTopics, profile } from "@/data/profile";

const Speaking = () => {
  const upcoming = talks.filter((t) => t.upcoming);
  const past = talks.filter((t) => !t.upcoming);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Speaking</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Speaker Profile</h1>
            <p className="mt-3 text-lg text-muted-foreground">Conferences, keynotes, and topics I speak on.</p>
          </motion.div>

          {/* Bio */}
          <div className="mt-12 rounded-xl border border-border bg-card p-8">
            <h2 className="text-lg font-semibold">Speaker Bio</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {profile.name} is a Product & Innovation leader with 15+ years of experience building AI-powered
              assessment and learning platforms. He speaks at international conferences about trust in digital exams,
              product strategy, and the future of credentialing. He holds an MS in Computer Science from UIUC and is a
              Kellogg Executive Scholar.
            </p>
          </div>

          {/* Topics */}
          <div className="mt-12">
            <SectionHeading title="Topics I Speak On" />
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {speakerTopics.map((t, i) => (
                <motion.div key={t} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{t}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Upcoming */}
          {upcoming.length > 0 && (
            <div className="mt-12">
              <SectionHeading title="Upcoming Engagements" />
              <div className="mt-6 space-y-4">
                {upcoming.map((t, i) => (
                  <motion.div key={t.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="rounded-xl border-2 border-primary/20 bg-accent/30 p-5"
                  >
                    <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">Upcoming</span>
                    <h3 className="mt-2 font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.event} · {t.location} · {t.year}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Past */}
          <div className="mt-12">
            <SectionHeading title="Past Sessions" />
            <div className="mt-6 space-y-3">
              {past.map((t, i) => (
                <motion.div key={t.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h3 className="text-sm font-semibold">{t.title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{t.event} · {t.location} · {t.year}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-xl border border-border bg-card p-8 text-center">
            <h3 className="font-heading text-xl font-bold">Invite Me to Speak</h3>
            <p className="mt-2 text-sm text-muted-foreground">I'd love to share insights at your next event or conference.</p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] transition-transform">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Speaking;
