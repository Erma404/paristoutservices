import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, Building, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProjectImage {
  url: string;
  caption: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  client: string;
  duration: string;
  description: string;
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  images?: ProjectImage[];
}

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal = ({ project, isOpen, onClose }: ProjectDetailModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const images = project.images || [];
  const hasImages = images.length > 0;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'plomberie': 'Plomberie',
      'gaz': 'Gaz',
      'salle-de-bain': 'Salle de bain',
      'ventilation': 'Ventilation',
    };
    return labels[category] || category;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-3xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <div>
                <span className="inline-block px-3 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs font-semibold mb-2">
                  {getCategoryLabel(project.category)}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{project.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="grid lg:grid-cols-2 gap-8 p-6">
                {/* Image Gallery */}
                <div>
                  {hasImages ? (
                    <div className="relative">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                        <img
                          src={images[currentImageIndex].url}
                          alt={images[currentImageIndex].caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Image Caption */}
                      <p className="text-center text-sm text-slate-500 mt-3">
                        {images[currentImageIndex].caption}
                      </p>

                      {/* Navigation */}
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5 text-slate-700" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                          >
                            <ChevronRight className="w-5 h-5 text-slate-700" />
                          </button>
                        </>
                      )}

                      {/* Thumbnails */}
                      {images.length > 1 && (
                        <div className="flex gap-2 mt-4 justify-center">
                          {images.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                                idx === currentImageIndex ? 'border-blue-600 ring-2 ring-blue-200' : 'border-transparent opacity-60 hover:opacity-100'
                              }`}
                            >
                              <img src={img.url} alt="" className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                      <span className="text-white/20 text-8xl font-bold">{project.id}</span>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-6">
                  {/* Quick Info */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4 text-center">
                      <MapPin className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs text-slate-500 mb-1">Localisation</div>
                      <div className="font-semibold text-slate-900 text-sm">{project.location}</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 text-center">
                      <Building className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs text-slate-500 mb-1">Client</div>
                      <div className="font-semibold text-slate-900 text-sm">{project.client}</div>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 text-center">
                      <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                      <div className="text-xs text-slate-500 mb-1">Durée</div>
                      <div className="font-semibold text-slate-900 text-sm">{project.duration}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-3">Description du projet</h3>
                    <p className="text-slate-600 leading-relaxed">
                      {project.fullDescription || project.description}
                    </p>
                  </div>

                  {/* Challenges */}
                  {project.challenges && project.challenges.length > 0 && (
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-3">Défis rencontrés</h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-600">
                            <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                              {idx + 1}
                            </span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Solutions */}
                  {project.solutions && project.solutions.length > 0 && (
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-3">Solutions apportées</h3>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-slate-600">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="pt-4">
                    <Link to="/contact" onClick={onClose}>
                      <Button variant="hero" size="lg" className="w-full">
                        Un projet similaire ? Contactez-nous
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
