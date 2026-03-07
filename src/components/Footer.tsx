import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg font-bold">Adarsh Sudhindra</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Product & Innovation Leader building smarter, fairer, and more secure assessment experiences.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
          <div className="grid grid-cols-2 gap-1.5 text-sm text-muted-foreground">
            {[
              { label: "About", path: "/about" },
              { label: "Work & Impact", path: "/work" },
              { label: "Writing", path: "/writing" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="hover:text-foreground transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Connect</h4>
          <div className="flex gap-3">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border p-2.5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href={profile.twitter} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border p-2.5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border p-2.5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="rounded-lg border border-border p-2.5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Adarsh Sudhindra. All rights reserved.</p>
        <p>Built with care ✦</p>
      </div>
    </div>
  </footer>
);

export default Footer;
