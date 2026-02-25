import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  date: string;
  readingTime: string;
  featured?: boolean;
  index: number;
}

const ArticleCard = ({ title, summary, tags, date, readingTime, featured, index }: ArticleCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className={`group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30 ${featured ? "md:col-span-2 lg:col-span-3" : ""}`}
  >
    <div className="flex flex-wrap gap-2 mb-3">
      {tags.map((t) => (
        <span key={t} className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground">
          {t}
        </span>
      ))}
    </div>
    <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{summary}</p>
    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
      <div className="flex items-center gap-3">
        <span>{new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {readingTime}</span>
      </div>
      <span className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Read <ArrowRight className="h-3 w-3" />
      </span>
    </div>
  </motion.article>
);

export default ArticleCard;
