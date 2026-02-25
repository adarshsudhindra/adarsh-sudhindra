import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Calendar } from "lucide-react";
import Layout from "@/components/Layout";
import { profile } from "@/data/profile";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", reason: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — would integrate with a backend
    alert("Thank you for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", reason: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Let's Connect</h1>
            <p className="mt-3 text-lg text-muted-foreground">Have a question, collaboration idea, or speaking invite? I'd love to hear from you.</p>
          </motion.div>

          <div className="mt-12 grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text" required value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email" required value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Reason</label>
                <select
                  value={form.reason}
                  onChange={(e) => setForm({ ...form, reason: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Select a reason</option>
                  <option value="speaking">Speaking invitation</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="consulting">Consulting / Advisory</option>
                  <option value="media">Media / Interview</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  required rows={5} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  placeholder="Tell me more..."
                />
              </div>
              <button type="submit" className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]">
                Send Message
              </button>
            </form>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-4">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">LinkedIn</p>
                  <p className="text-xs text-muted-foreground">Connect with me professionally</p>
                </div>
              </a>
              <a href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors"
              >
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-xs text-muted-foreground">{profile.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-5">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Book a Call</p>
                  <p className="text-xs text-muted-foreground">Calendar booking coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
