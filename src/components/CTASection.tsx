import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
  variant?: 'blue' | 'orange' | 'dark';
  children?: ReactNode;
}

const CTASection = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  children 
}: CTASectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FDF8F3] via-[#F5F3F0] to-[#E8EBF4]">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl" />

      <div className="container-custom py-20 lg:py-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4 font-light">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-600 mb-8">
              {subtitle}
            </p>
          )}
          {children}
          <Link to={ctaLink}>
            <Button 
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {ctaText}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
