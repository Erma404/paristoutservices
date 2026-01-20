import { useState, useEffect } from 'react';
import { UserPlus, Trash2, Shield, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface UserRole {
  id: string;
  user_id: string;
  role: 'admin' | 'editor';
  created_at: string;
  email?: string;
}

const AdminUsers = () => {
  const [users, setUsers] = useState<UserRole[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRole, setNewRole] = useState<'admin' | 'editor'>('editor');
  const [creating, setCreating] = useState(false);
  const { toast } = useToast();
  const { user } = useAuth();

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from('user_roles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching users:', error);
    } else {
      setUsers(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = async () => {
    if (!newEmail || !newPassword) {
      toast({ title: 'Erreur', description: 'Email et mot de passe requis.', variant: 'destructive' });
      return;
    }

    setCreating(true);

    // Create user via Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: newEmail,
      password: newPassword,
    });

    if (authError || !authData.user) {
      toast({ title: 'Erreur', description: authError?.message || 'Erreur lors de la création.', variant: 'destructive' });
      setCreating(false);
      return;
    }

    // Assign role
    const { error: roleError } = await supabase.from('user_roles').insert({
      user_id: authData.user.id,
      role: newRole,
    });

    if (roleError) {
      toast({ title: 'Erreur', description: roleError.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Utilisateur créé.' });
      setIsDialogOpen(false);
      setNewEmail('');
      setNewPassword('');
      setNewRole('editor');
      fetchUsers();
    }

    setCreating(false);
  };

  const handleDeleteUser = async (userId: string) => {
    const { error } = await supabase.from('user_roles').delete().eq('user_id', userId);

    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Utilisateur supprimé.' });
      fetchUsers();
    }
  };

  const updateRole = async (userId: string, newRole: 'admin' | 'editor') => {
    const { error } = await supabase
      .from('user_roles')
      .update({ role: newRole })
      .eq('user_id', userId);

    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Rôle mis à jour.' });
      fetchUsers();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Utilisateurs</h1>
          <p className="text-slate-500 mt-1">Gérez les accès au back-office</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <UserPlus className="w-4 h-4 mr-2" />
              Ajouter un utilisateur
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nouvel utilisateur</DialogTitle>
            </DialogHeader>

            <div className="space-y-4 py-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Rôle</Label>
                <Select value={newRole} onValueChange={(v) => setNewRole(v as 'admin' | 'editor')}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="editor">Éditeur</SelectItem>
                    <SelectItem value="admin">Administrateur</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <DialogClose asChild>
                  <Button variant="outline">Annuler</Button>
                </DialogClose>
                <Button onClick={handleCreateUser} disabled={creating} className="bg-blue-600 hover:bg-blue-700">
                  {creating ? 'Création...' : 'Créer'}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-12 text-slate-500">Chargement...</div>
      ) : users.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center text-slate-500">
            Aucun utilisateur configuré.
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {users.map((u) => (
            <Card key={u.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    {u.role === 'admin' ? (
                      <ShieldCheck className="w-5 h-5 text-blue-600" />
                    ) : (
                      <Shield className="w-5 h-5 text-slate-400" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="font-medium text-slate-900">{u.user_id}</div>
                    <div className="text-sm text-slate-500 capitalize">{u.role}</div>
                  </div>

                  <Select
                    value={u.role}
                    onValueChange={(v) => updateRole(u.user_id, v as 'admin' | 'editor')}
                    disabled={u.user_id === user?.id}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="editor">Éditeur</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>

                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-600"
                        disabled={u.user_id === user?.id}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Supprimer cet utilisateur ?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Cette action supprimera l'accès de cet utilisateur au back-office.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Annuler</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteUser(u.user_id)}
                          className="bg-red-500 hover:bg-red-600"
                        >
                          Supprimer
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
