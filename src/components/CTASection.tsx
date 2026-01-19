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
    <section className="bg-slate-900 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom py-20 lg:py-28 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 font-light">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-white/60 mb-8">
              {subtitle}
            </p>
          )}
          {children}
          <Link to={ctaLink}>
            <Button 
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-sm font-medium"
            >
              {ctaText}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
