import { motion } from "framer-motion";
import { Mail, Linkedin, Mic, Users, Newspaper, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import { profile } from "@/data/profile";

const reasons = [
  { icon: Mic, label: "Speaking Invitations", description: "Conferences, panels, keynotes, and workshops" },
  { icon: Users, label: "Collaboration", description: "Product partnerships, advisory, or joint ventures" },
  { icon: Newspaper, label: "Media & Interviews", description: "Podcasts, articles, and press inquiries" },
  { icon: MessageCircle, label: "General Inquiries", description: "Anything else — I'm happy to chat" },
];

const Contact = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Get in Touch</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Let's Start a Conversation</h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Whether you'd like to invite me to speak, explore a collaboration, discuss a media opportunity, or simply connect — I'd love to hear from you.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 rounded-2xl border border-border bg-card p-8 md:p-12"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-7 w-7 text-primary" />
          </div>
          <h2 className="mt-6 text-2xl font-bold">Drop me a line</h2>
          <p className="mt-2 text-muted-foreground">The best way to reach me is via email</p>
          <a
            href="mailto:adarsh.sudhindra@gmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="h-4 w-4" />
            adarsh.sudhindra@gmail.com
          </a>
        </motion.div>

        {/* Reasons */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{r.label}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{r.description}</p>
            </motion.div>
          ))}
        </div>

        {/* LinkedIn */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <p className="text-sm text-muted-foreground">You can also find me on</p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/30 hover:bg-muted"
          >
            <Linkedin className="h-4 w-4 text-primary" />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Contact;