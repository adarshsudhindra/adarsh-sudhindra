import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Writing = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">My Posts</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Thought Leadership</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              My posts and articles on AI, product strategy, leadership, and the future of assessment.
            </p>
          </motion.div>

          <div className="mt-12">
            <iframe
              src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25660904"
              sandbox="allow-scripts allow-same-origin"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full border-0"
              style={{ minHeight: "600px" }}
              title="LinkedIn Posts"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Writing;
