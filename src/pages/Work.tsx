import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import TimelineItem from "@/components/TimelineItem";
import { experiences, capabilities } from "@/data/profile";

const videos = [
  { id: "ipWtbnorFCM", title: "Video 1" },
  { id: "MHlwNzND4RM", title: "Video 2" },
  { id: "p67dOJXDzJo", title: "Video 3" },
  { id: "eOEyf9yEJtk", title: "Video 4" },
  { id: "q31eBYVcqxM", title: "Video 5" },
  { id: "Fv0BlozGyLU", title: "Video 6" },
];

const Work = () => {
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
            <div className="mt-6">
              {experiences.map((e, i) => (
                <TimelineItem key={e.company + e.title} {...e} index={i} />
              ))}
            </div>
          </div>

          {/* Videos */}
          <div className="mt-16">
            <SectionHeading title="Videos" />
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {videos.map((v, i) => (
                <motion.div
                  key={v.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="overflow-hidden rounded-xl border border-border bg-card"
                >
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full"
                      loading="lazy"
                    />
                  </div>
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
