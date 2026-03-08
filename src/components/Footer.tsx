import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <h3 className="font-heading text-lg font-bold">Adarsh Sudhindra</h3>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Product & Innovation Leader building smarter, fairer, and more secure assessment experiences.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
            {[
              { label: "About", path: "/about" },
              { label: "Work & Impact", path: "/work" },
              { label: "My Posts", path: "/writing" },
              { label: "Personal", path: "/personal" },
              { label: "Contact", path: "/contact" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="hover:text-foreground transition-colors w-fit">
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
            <a href={`mailto:${profile.email}`} className="rounded-lg border border-border p-2.5 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Adarsh Sudhindra. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
