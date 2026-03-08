import { motion } from "framer-motion";
import excelsoftLogo from "@/assets/excelsoft.jpeg";
import adobeLogo from "@/assets/adobe.jpeg";
import ibmLogo from "@/assets/ibm.jpeg";

const companyLogos: Record<string, string> = {
  "Excelsoft Technologies": excelsoftLogo,
  "Adobe Systems": adobeLogo,
  "IBM Software Labs": ibmLogo,
};

interface TimelineItemProps {
  company: string;
  title: string;
  duration: string;
  location: string;
  outcomes: string[];
  current?: boolean;
  index: number;
}

const TimelineItem = ({ company, title, duration, location, outcomes, current, index }: TimelineItemProps) => {
  const logo = companyLogos[company];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative border-l-2 border-border pl-8 pb-10 last:pb-0"
    >
      <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background" />
      {current && (
        <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
          Current
        </span>
      )}
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex items-center gap-2 mt-0.5">
        {logo && (
          <img src={logo} alt={company} className="h-5 w-5 rounded-sm object-contain" />
        )}
        <p className="text-sm font-medium text-primary">{company}</p>
      </div>
      <p className="mt-0.5 text-xs text-muted-foreground">{duration} · {location}</p>
      <ul className="mt-3 space-y-1.5">
        {outcomes.map((o, i) => (
          <li key={i} className="text-sm text-muted-foreground flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/40" />
            {o}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TimelineItem;
