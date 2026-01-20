import { useState, useEffect } from 'react';
import { Save, Phone, Mail, MapPin, Clock, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ContactInfo {
  id: string;
  phone: string;
  email: string;
  address_line1: string;
  address_line2: string | null;
  city: string;
  postal_code: string;
  opening_hours: string;
  google_maps_url: string | null;
}

const AdminContact = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const fetchContactInfo = async () => {
    const { data, error } = await supabase
      .from('contact_info')
      .select('*')
      .maybeSingle();

    if (error) {
      console.error('Error fetching contact info:', error);
    } else {
      setContactInfo(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const handleSave = async () => {
    if (!contactInfo) return;

    setSaving(true);

    const { error } = await supabase
      .from('contact_info')
      .update({
        phone: contactInfo.phone,
        email: contactInfo.email,
        address_line1: contactInfo.address_line1,
        address_line2: contactInfo.address_line2,
        city: contactInfo.city,
        postal_code: contactInfo.postal_code,
        opening_hours: contactInfo.opening_hours,
        google_maps_url: contactInfo.google_maps_url,
      })
      .eq('id', contactInfo.id);

    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Succès', description: 'Informations de contact mises à jour.' });
    }

    setSaving(false);
  };

  if (loading) {
    return <div className="text-center py-12 text-slate-500">Chargement...</div>;
  }

  if (!contactInfo) {
    return <div className="text-center py-12 text-slate-500">Aucune information de contact.</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>
          <p className="text-slate-500 mt-1">Gérez les informations de contact affichées sur le site</p>
        </div>

        <Button onClick={handleSave} disabled={saving} className="bg-blue-600 hover:bg-blue-700">
          <Save className="w-4 h-4 mr-2" />
          {saving ? 'Enregistrement...' : 'Enregistrer'}
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Phone & Email */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5 text-blue-600" />
              Téléphone & Email
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                className="mt-2"
              />
            </div>
          </CardContent>
        </Card>

        {/* Address */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5 text-blue-600" />
              Adresse
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="address_line1">Adresse ligne 1</Label>
              <Input
                id="address_line1"
                value={contactInfo.address_line1}
                onChange={(e) => setContactInfo({ ...contactInfo, address_line1: e.target.value })}
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="address_line2">Adresse ligne 2 (optionnel)</Label>
              <Input
                id="address_line2"
                value={contactInfo.address_line2 || ''}
                onChange={(e) => setContactInfo({ ...contactInfo, address_line2: e.target.value || null })}
                className="mt-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="postal_code">Code postal</Label>
                <Input
                  id="postal_code"
                  value={contactInfo.postal_code}
                  onChange={(e) => setContactInfo({ ...contactInfo, postal_code: e.target.value })}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="city">Ville</Label>
                <Input
                  id="city"
                  value={contactInfo.city}
                  onChange={(e) => setContactInfo({ ...contactInfo, city: e.target.value })}
                  className="mt-2"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Opening Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5 text-blue-600" />
              Horaires
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="opening_hours">Horaires d'ouverture</Label>
              <Input
                id="opening_hours"
                value={contactInfo.opening_hours}
                onChange={(e) => setContactInfo({ ...contactInfo, opening_hours: e.target.value })}
                placeholder="Lun - Ven : 8h - 18h"
                className="mt-2"
              />
            </div>
          </CardContent>
        </Card>

        {/* Google Maps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Map className="w-5 h-5 text-blue-600" />
              Google Maps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="google_maps_url">URL Google Maps (iframe src)</Label>
              <Input
                id="google_maps_url"
                value={contactInfo.google_maps_url || ''}
                onChange={(e) => setContactInfo({ ...contactInfo, google_maps_url: e.target.value || null })}
                placeholder="https://www.google.com/maps/embed?..."
                className="mt-2"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminContact;
