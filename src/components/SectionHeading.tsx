import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ title, subtitle, align = "left" }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className={align === "center" ? "text-center" : ""}
  >
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    {subtitle && (
      <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
        {subtitle}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
