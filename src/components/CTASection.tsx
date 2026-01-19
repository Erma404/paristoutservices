import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Phone } from 'lucide-react';

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
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900" />
      
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-3xl -top-40 -right-40"
          style={{ animation: 'float-blob 15s ease-in-out infinite' }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-3xl -bottom-40 -left-40"
          style={{ animation: 'float-blob 20s ease-in-out infinite reverse' }}
        />
      </div>

      {/* Content */}
      <div className="container-custom py-24 lg:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-light leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-white/80 mb-10">
              {subtitle}
            </p>
          )}
          {children}
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link to={ctaLink}>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-7 text-base font-semibold shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all"
              >
                {ctaText}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+33601167240">
              <Button 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-7 text-base font-medium backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                06 01 16 72 40
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
