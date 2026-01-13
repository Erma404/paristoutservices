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
  variant = 'blue',
  children 
}: CTASectionProps) => {
  const bgClasses = {
    blue: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800',
    orange: 'bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700',
    dark: 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950',
  };

  return (
    <section className={`${bgClasses[variant]} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom section-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-white/80 mb-8">
              {subtitle}
            </p>
          )}
          {children}
          <Link to={ctaLink}>
            <Button 
              variant={variant === 'orange' ? 'default' : 'hero'} 
              size="lg"
              className="mt-6"
            >
              {ctaText}
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
