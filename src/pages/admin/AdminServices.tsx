import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, Eye, EyeOff, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Service {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  features: string[];
  image_url: string | null;
  is_published: boolean;
  sort_order: number;
}

const AdminServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: '',
    features: '',
    image_url: '',
    is_published: true,
  });

  const fetchServices = async () => {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('Error fetching services:', error);
    } else {
      setServices(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      icon: '',
      features: '',
      image_url: '',
      is_published: true,
    });
    setEditingService(null);
  };

  const openEditDialog = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description || '',
      icon: service.icon || '',
      features: service.features.join('\n'),
      image_url: service.image_url || '',
      is_published: service.is_published,
    });
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    if (!formData.title) {
      toast({ title: 'Erreur', description: 'Le titre est requis.', variant: 'destructive' });
      return;
    }

    const features = formData.features
      .split('\n')
      .map(f => f.trim())
      .filter(f => f.length > 0);

    if (editingService) {
      const { error } = await supabase
        .from('services')
        .update({
          title: formData.title,
          description: formData.description || null,
          icon: formData.icon || null,
          features,
          image_url: formData.image_url || null,
          is_published: formData.is_published,
        })
        .eq('id', editingService.id);

      if (error) {
        toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Succès', description: 'Service mis à jour.' });
        fetchServices();
        setIsDialogOpen(false);
        resetForm();
      }
    } else {
      const { error } = await supabase.from('services').insert({
        title: formData.title,
        description: formData.description || null,
        icon: formData.icon || null,
        features,
        image_url: formData.image_url || null,
        is_published: formData.is_published,
        sort_order: services.length,
      });

      if (error) {
        toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Succès', description: 'Service créé.' });
        fetchServices();
        setIsDialogOpen(false);
        resetForm();
      }
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('services').delete().eq('id', id);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Service supprimé.' });
      fetchServices();
    }
  };

  const togglePublished = async (service: Service) => {
    const { error } = await supabase
      .from('services')
      .update({ is_published: !service.is_published })
      .eq('id', service.id);

    if (!error) {
      fetchServices();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Services</h1>
          <p className="text-slate-500 mt-1">Gérez vos services et prestations</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un service
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingService ? 'Modifier le service' : 'Nouveau service'}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 py-4">
              <div>
                <Label htmlFor="title">Titre *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="icon">Icône (nom Lucide, ex: Wrench)</Label>
                <Input
                  id="icon"
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  placeholder="Wrench"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="features">Caractéristiques (une par ligne)</Label>
                <Textarea
                  id="features"
                  value={formData.features}
                  onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                  placeholder="Installation complète&#10;Maintenance préventive&#10;Réparation urgente"
                  rows={4}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="image_url">URL de l'image</Label>
                <Input
                  id="image_url"
                  value={formData.image_url}
                  onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                  placeholder="https://..."
                  className="mt-2"
                />
              </div>

              <div className="flex items-center gap-3">
                <Switch
                  checked={formData.is_published}
                  onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                />
                <Label>Publié</Label>
              </div>

              <div className="flex justify-end gap-3">
                <DialogClose asChild>
                  <Button variant="outline">Annuler</Button>
                </DialogClose>
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                  {editingService ? 'Mettre à jour' : 'Créer'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-500">Chargement...</div>
      ) : services.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-slate-500">
            Aucun service pour le moment. Créez votre premier service !
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <GripVertical className="w-5 h-5 text-slate-300 cursor-grab" />

                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 text-lg font-semibold">
                      {service.title.charAt(0)}
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 truncate">{service.title}</h3>
                    {service.description && (
                      <p className="text-sm text-slate-500 truncate">{service.description}</p>
                    )}
                    <div className="text-xs text-slate-400 mt-1">
                      {service.features.length} caractéristiques
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => togglePublished(service)}
                      className={service.is_published ? 'text-emerald-600' : 'text-slate-400'}
                    >
                      {service.is_published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>

                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(service)}>
                      <Pencil className="w-4 h-4" />
                    </Button>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Supprimer ce service ?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Cette action est irréversible.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(service.id)}
                            className="bg-red-500 hover:bg-red-600"
                          >
                            Supprimer
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminServices;
