import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

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
      whileHover={{ scale: 1.05, y: -4 }}
      className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 hover:bg-white/15 transition-colors duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4 shadow-lg">
        <Award className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white font-semibold text-sm leading-tight mb-2 whitespace-pre-line">
        {name}
      </h3>
      <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default CertificationBadge;
