import { useEffect } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const Writing = () => {
  useEffect(() => {
    // Load SociableKit widget script
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/linkedin-profile-posts/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">My Posts</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Thought Leadership</h1>
            <p className="mt-3 text-lg text-muted-foreground">
              My posts and articles on AI, product strategy, leadership, and the future of assessment.
            </p>
          </motion.div>

          <div className="mt-10">
            <div className="sk-ww-linkedin-profile-post" data-embed-id="25660904"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Writing;
