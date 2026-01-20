import { Settings, Globe, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AdminSettings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Paramètres</h1>
        <p className="text-slate-500 mt-1">Configuration générale du site</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Globe className="w-5 h-5 text-blue-600" />
              SEO & Métadonnées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-500 text-sm">
              La configuration SEO est gérée directement dans le code pour une meilleure optimisation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Palette className="w-5 h-5 text-blue-600" />
              Apparence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-500 text-sm">
              Les couleurs et la typographie sont définies dans le design system du site.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettings;
