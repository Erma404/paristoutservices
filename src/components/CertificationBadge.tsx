import { motion } from 'framer-motion';

interface CertificationBadgeProps {
  name: string;
  description: string;
  delay?: number;
}

const CertificationBadge = ({ name, description, delay = 0 }: CertificationBadgeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-lg border border-slate-100"
    >
      <div className="w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 shadow-xl">
        <span className="text-white font-bold text-xl">{name}</span>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
};

export default CertificationBadge;
