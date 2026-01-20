import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, FolderOpen, Image, Phone, ArrowRight, Clock, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';

interface Stats {
  projects: number;
  services: number;
  contentItems: number;
}

const AdminDashboard = () => {
  const [stats, setStats] = useState<Stats>({ projects: 0, services: 0, contentItems: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      const [projectsRes, servicesRes, contentRes] = await Promise.all([
        supabase.from('projects').select('id', { count: 'exact', head: true }),
        supabase.from('services').select('id', { count: 'exact', head: true }),
        supabase.from('site_content').select('id', { count: 'exact', head: true }),
      ]);

      setStats({
        projects: projectsRes.count || 0,
        services: servicesRes.count || 0,
        contentItems: contentRes.count || 0,
      });
      setLoading(false);
    };

    fetchStats();
  }, []);

  const quickActions = [
    {
      title: 'Pages & Contenus',
      description: 'Modifier les textes du site',
      href: '/admin/content',
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      title: 'Réalisations',
      description: 'Gérer vos projets',
      href: '/admin/projects',
      icon: FolderOpen,
      color: 'bg-orange-500',
    },
    {
      title: 'Services',
      description: 'Modifier vos services',
      href: '/admin/services',
      icon: Wrench,
      color: 'bg-purple-500',
    },
    {
      title: 'Contact',
      description: 'Mettre à jour les coordonnées',
      href: '/admin/contact',
      icon: Phone,
      color: 'bg-emerald-500',
    },
    {
      title: 'Médiathèque',
      description: 'Gérer les images',
      href: '/admin/media',
      icon: Image,
      color: 'bg-pink-500',
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Tableau de bord</h1>
        <p className="text-slate-500 mt-1">Bienvenue dans votre espace d'administration</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Réalisations</CardTitle>
            <FolderOpen className="w-5 h-5 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">
              {loading ? '...' : stats.projects}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Services</CardTitle>
            <Wrench className="w-5 h-5 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">
              {loading ? '...' : stats.services}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-slate-500">Contenus éditables</CardTitle>
            <FileText className="w-5 h-5 text-slate-400" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-slate-900">
              {loading ? '...' : stats.contentItems}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick actions */}
      <div>
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.title} to={action.href}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${action.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                          {action.title}
                        </h3>
                        <p className="text-sm text-slate-500 mt-1">{action.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent activity placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Activité récente
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-500 text-sm">
            Les dernières modifications apparaîtront ici.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
