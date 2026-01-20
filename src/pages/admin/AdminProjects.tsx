import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2, Eye, EyeOff, Star, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Project {
  id: string;
  title: string;
  description: string | null;
  category: string;
  location: string | null;
  year: string | null;
  image_url: string | null;
  is_featured: boolean;
  is_published: boolean;
  sort_order: number;
}

const categories = [
  'Plomberie',
  'Gaz',
  'Ventilation',
  'Salle de bain',
  'Chauffe-eau',
  'Rénovation',
];

const AdminProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    year: '',
    image_url: '',
    is_featured: false,
    is_published: true,
  });

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('sort_order', { ascending: true });

    if (error) {
      console.error('Error fetching projects:', error);
    } else {
      setProjects(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      category: '',
      location: '',
      year: '',
      image_url: '',
      is_featured: false,
      is_published: true,
    });
    setEditingProject(null);
  };

  const openEditDialog = (project: Project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description || '',
      category: project.category,
      location: project.location || '',
      year: project.year || '',
      image_url: project.image_url || '',
      is_featured: project.is_featured,
      is_published: project.is_published,
    });
    setIsDialogOpen(true);
  };

  const handleSave = async () => {
    if (!formData.title || !formData.category) {
      toast({
        title: 'Erreur',
        description: 'Le titre et la catégorie sont requis.',
        variant: 'destructive',
      });
      return;
    }

    if (editingProject) {
      const { error } = await supabase
        .from('projects')
        .update({
          title: formData.title,
          description: formData.description || null,
          category: formData.category,
          location: formData.location || null,
          year: formData.year || null,
          image_url: formData.image_url || null,
          is_featured: formData.is_featured,
          is_published: formData.is_published,
        })
        .eq('id', editingProject.id);

      if (error) {
        toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Succès', description: 'Projet mis à jour.' });
        fetchProjects();
        setIsDialogOpen(false);
        resetForm();
      }
    } else {
      const { error } = await supabase.from('projects').insert({
        title: formData.title,
        description: formData.description || null,
        category: formData.category,
        location: formData.location || null,
        year: formData.year || null,
        image_url: formData.image_url || null,
        is_featured: formData.is_featured,
        is_published: formData.is_published,
        sort_order: projects.length,
      });

      if (error) {
        toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
      } else {
        toast({ title: 'Succès', description: 'Projet créé.' });
        fetchProjects();
        setIsDialogOpen(false);
        resetForm();
      }
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('projects').delete().eq('id', id);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Projet supprimé.' });
      fetchProjects();
    }
  };

  const togglePublished = async (project: Project) => {
    const { error } = await supabase
      .from('projects')
      .update({ is_published: !project.is_published })
      .eq('id', project.id);

    if (!error) {
      fetchProjects();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Réalisations</h1>
          <p className="text-slate-500 mt-1">Gérez vos projets et réalisations</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un projet
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProject ? 'Modifier le projet' : 'Nouveau projet'}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="title">Titre *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Catégorie *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="year">Année</Label>
                  <Input
                    id="year"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    placeholder="2024"
                    className="mt-2"
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="location">Localisation</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Paris 15ème"
                    className="mt-2"
                  />
                </div>

                <div className="col-span-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <div className="col-span-2">
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
                    checked={formData.is_featured}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
                  />
                  <Label>Projet en vedette</Label>
                </div>

                <div className="flex items-center gap-3">
                  <Switch
                    checked={formData.is_published}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                  />
                  <Label>Publié</Label>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <DialogClose asChild>
                  <Button variant="outline">Annuler</Button>
                </DialogClose>
                <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">
                  {editingProject ? 'Mettre à jour' : 'Créer'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-500">Chargement...</div>
      ) : projects.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-slate-500">
            Aucun projet pour le moment. Créez votre premier projet !
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {projects.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <GripVertical className="w-5 h-5 text-slate-300 cursor-grab" />

                  {project.image_url ? (
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-slate-100 flex items-center justify-center">
                      <span className="text-slate-400 text-xs">No img</span>
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-slate-900 truncate">{project.title}</h3>
                      {project.is_featured && (
                        <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500 mt-1">
                      <span className="px-2 py-0.5 bg-slate-100 rounded-full text-xs">
                        {project.category}
                      </span>
                      {project.location && <span>{project.location}</span>}
                      {project.year && <span>{project.year}</span>}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => togglePublished(project)}
                      className={project.is_published ? 'text-emerald-600' : 'text-slate-400'}
                    >
                      {project.is_published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                    </Button>

                    <Button variant="ghost" size="icon" onClick={() => openEditDialog(project)}>
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
                          <AlertDialogTitle>Supprimer ce projet ?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Cette action est irréversible.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDelete(project.id)}
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

export default AdminProjects;
