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
      className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-card border border-slate-100"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-4 shadow-lg">
        <span className="text-white font-bold text-lg">{name}</span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default CertificationBadge;
