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
    <section className="relative overflow-hidden animated-gradient-dark">
      {/* Animated Blobs */}
      <div className="blob blob-blue w-[400px] h-[400px] -top-20 -left-20 opacity-40" style={{ animationDelay: '0s' }} />
      <div className="blob blob-cyan w-[300px] h-[300px] bottom-0 right-10 opacity-30" style={{ animationDelay: '-5s' }} />
      <div className="blob blob-orange w-[250px] h-[250px] top-1/2 right-1/3 opacity-20" style={{ animationDelay: '-10s' }} />

      <div className="container-custom py-20 lg:py-28 relative z-10">
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
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
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
