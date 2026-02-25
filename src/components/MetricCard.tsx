import { motion } from "framer-motion";

interface MetricCardProps {
  label: string;
  value: string;
  index: number;
}

const MetricCard = ({ label, value, index }: MetricCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="rounded-xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-lg"
  >
    <div className="font-heading text-3xl font-bold text-primary md:text-4xl">{value}</div>
    <div className="mt-2 text-sm text-muted-foreground">{label}</div>
  </motion.div>
);

export default MetricCard;
