import { useState, useEffect } from 'react';
import { Save, Plus, Trash2, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ContentItem {
  id: string;
  page_key: string;
  section_key: string;
  content_key: string;
  content_type: string;
  content_value: string;
  label: string;
  sort_order: number;
}

type ContentType = 'text' | 'rich_text' | 'image' | 'link' | 'list';

const pages = [
  { key: 'home', label: 'Accueil' },
  { key: 'about', label: 'À propos' },
  { key: 'services', label: 'Services' },
  { key: 'contact', label: 'Contact' },
  { key: 'footer', label: 'Footer' },
];

const AdminContent = () => {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const { toast } = useToast();

  const [newContent, setNewContent] = useState({
    page_key: 'home',
    section_key: '',
    content_key: '',
    content_type: 'text' as ContentType,
    content_value: '',
    label: '',
  });

  const fetchContent = async () => {
    const { data, error } = await supabase
      .from('site_content')
      .select('*')
      .order('page_key')
      .order('section_key')
      .order('sort_order');

    if (error) {
      console.error('Error fetching content:', error);
    } else {
      setContent(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleSave = async () => {
    setSaving(true);

    for (const item of content) {
      const { error } = await supabase
        .from('site_content')
        .update({ content_value: item.content_value })
        .eq('id', item.id);

      if (error) {
        toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
        setSaving(false);
        return;
      }
    }

    toast({ title: 'Succès', description: 'Contenus mis à jour.' });
    setSaving(false);
  };

  const handleAddContent = async () => {
    if (!newContent.section_key || !newContent.content_key || !newContent.label) {
      toast({ title: 'Erreur', description: 'Tous les champs sont requis.', variant: 'destructive' });
      return;
    }

    const { error } = await supabase.from('site_content').insert({
      page_key: newContent.page_key,
      section_key: newContent.section_key,
      content_key: newContent.content_key,
      content_type: newContent.content_type,
      content_value: newContent.content_value,
      label: newContent.label,
      sort_order: content.filter(c => c.page_key === newContent.page_key).length,
    });

    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Contenu ajouté.' });
      setIsAddDialogOpen(false);
      setNewContent({
        page_key: 'home',
        section_key: '',
        content_key: '',
        content_type: 'text',
        content_value: '',
        label: '',
      });
      fetchContent();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('site_content').delete().eq('id', id);

    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Contenu supprimé.' });
      fetchContent();
    }
  };

  const updateContentValue = (id: string, value: string) => {
    setContent(content.map(c => c.id === id ? { ...c, content_value: value } : c));
  };

  const getContentByPage = (pageKey: string) => {
    return content.filter(c => c.page_key === pageKey);
  };

  const groupBySection = (items: ContentItem[]) => {
    return items.reduce((acc, item) => {
      if (!acc[item.section_key]) {
        acc[item.section_key] = [];
      }
      acc[item.section_key].push(item);
      return acc;
    }, {} as Record<string, ContentItem[]>);
  };

  if (loading) {
    return <div className="text-center py-12 text-slate-500">Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Pages & Contenus</h1>
          <p className="text-slate-500 mt-1">Modifiez les textes et contenus de chaque page</p>
        </div>

        <div className="flex gap-3">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                Ajouter un contenu
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nouveau contenu</DialogTitle>
              </DialogHeader>

              <div className="space-y-4 py-4">
                <div>
                  <Label>Page</Label>
                  <Select
                    value={newContent.page_key}
                    onValueChange={(v) => setNewContent({ ...newContent, page_key: v })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {pages.map((p) => (
                        <SelectItem key={p.key} value={p.key}>{p.label}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="section">Section (ex: hero, features)</Label>
                  <Input
                    id="section"
                    value={newContent.section_key}
                    onChange={(e) => setNewContent({ ...newContent, section_key: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="key">Clé (ex: title, subtitle)</Label>
                  <Input
                    id="key"
                    value={newContent.content_key}
                    onChange={(e) => setNewContent({ ...newContent, content_key: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="label">Label affiché</Label>
                  <Input
                    id="label"
                    value={newContent.label}
                    onChange={(e) => setNewContent({ ...newContent, label: e.target.value })}
                    placeholder="Titre principal"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label>Type</Label>
                  <Select
                    value={newContent.content_type}
                    onValueChange={(v) => setNewContent({ ...newContent, content_type: v as ContentType })}
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Texte</SelectItem>
                      <SelectItem value="rich_text">Texte riche</SelectItem>
                      <SelectItem value="image">Image (URL)</SelectItem>
                      <SelectItem value="link">Lien</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="value">Valeur</Label>
                  {newContent.content_type === 'rich_text' ? (
                    <Textarea
                      id="value"
                      value={newContent.content_value}
                      onChange={(e) => setNewContent({ ...newContent, content_value: e.target.value })}
                      rows={4}
                      className="mt-2"
                    />
                  ) : (
                    <Input
                      id="value"
                      value={newContent.content_value}
                      onChange={(e) => setNewContent({ ...newContent, content_value: e.target.value })}
                      className="mt-2"
                    />
                  )}
                </div>

                <div className="flex justify-end gap-3 pt-4">
                  <DialogClose asChild>
                    <Button variant="outline">Annuler</Button>
                  </DialogClose>
                  <Button onClick={handleAddContent} className="bg-blue-600 hover:bg-blue-700">
                    Ajouter
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button onClick={handleSave} disabled={saving} className="bg-blue-600 hover:bg-blue-700">
            <Save className="w-4 h-4 mr-2" />
            {saving ? 'Enregistrement...' : 'Enregistrer'}
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          {pages.map((page) => (
            <TabsTrigger key={page.key} value={page.key}>
              {page.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {pages.map((page) => {
          const pageContent = getContentByPage(page.key);
          const sections = groupBySection(pageContent);

          return (
            <TabsContent key={page.key} value={page.key} className="mt-6">
              {Object.keys(sections).length === 0 ? (
                <Card>
                  <CardContent className="py-12 text-center">
                    <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <p className="text-slate-500">
                      Aucun contenu éditable pour cette page.
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      Cliquez sur "Ajouter un contenu" pour commencer.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {Object.entries(sections).map(([sectionKey, items]) => (
                    <Card key={sectionKey}>
                      <CardHeader>
                        <CardTitle className="text-lg capitalize">{sectionKey.replace(/-/g, ' ')}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {items.map((item) => (
                          <div key={item.id} className="flex gap-4 items-start">
                            <div className="flex-1">
                              <Label>{item.label}</Label>
                              {item.content_type === 'rich_text' ? (
                                <Textarea
                                  value={item.content_value}
                                  onChange={(e) => updateContentValue(item.id, e.target.value)}
                                  rows={4}
                                  className="mt-2"
                                />
                              ) : (
                                <Input
                                  value={item.content_value}
                                  onChange={(e) => updateContentValue(item.id, e.target.value)}
                                  className="mt-2"
                                />
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-600 mt-6"
                              onClick={() => handleDelete(item.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default AdminContent;
