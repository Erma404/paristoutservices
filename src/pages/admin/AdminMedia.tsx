import { useState, useEffect, useRef } from 'react';
import { Upload, Trash2, Copy, Check, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface MediaFile {
  name: string;
  url: string;
  created_at: string;
}

const AdminMedia = () => {
  const [files, setFiles] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const fetchFiles = async () => {
    const { data, error } = await supabase.storage.from('media').list('', {
      limit: 100,
      sortBy: { column: 'created_at', order: 'desc' },
    });

    if (error) {
      console.error('Error fetching files:', error);
    } else {
      const filesWithUrls = (data || []).map((file) => ({
        name: file.name,
        url: supabase.storage.from('media').getPublicUrl(file.name).data.publicUrl,
        created_at: file.created_at || '',
      }));
      setFiles(filesWithUrls);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (!uploadedFiles || uploadedFiles.length === 0) return;

    setUploading(true);

    for (const file of Array.from(uploadedFiles)) {
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
      const { error } = await supabase.storage.from('media').upload(fileName, file);

      if (error) {
        toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
      }
    }

    toast({ title: 'Succès', description: 'Fichier(s) téléversé(s).' });
    fetchFiles();
    setUploading(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (fileName: string) => {
    const { error } = await supabase.storage.from('media').remove([fileName]);

    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Fichier supprimé.' });
      fetchFiles();
    }
  };

  const copyUrl = async (url: string) => {
    await navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
    toast({ title: 'URL copiée', description: 'L\'URL a été copiée dans le presse-papier.' });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Médiathèque</h1>
          <p className="text-slate-500 mt-1">Gérez vos images et fichiers</p>
        </div>

        <div>
          <Input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleUpload}
            className="hidden"
            id="file-upload"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {uploading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Téléversement...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Téléverser
              </>
            )}
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-500">Chargement...</div>
      ) : files.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <ImageIcon className="w-12 h-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">Aucun fichier. Téléversez votre premier média !</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {files.map((file) => (
            <Card key={file.name} className="group overflow-hidden">
              <div className="aspect-square relative bg-slate-100">
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="w-9 h-9"
                    onClick={() => copyUrl(file.url)}
                  >
                    {copiedUrl === file.url ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="w-9 h-9 text-red-500 hover:text-red-600"
                    onClick={() => handleDelete(file.name)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-3">
                <p className="text-xs text-slate-500 truncate" title={file.name}>
                  {file.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminMedia;
