// models/commune.model.ts
export interface Commune {
  id:          number;
  code:        string;
  description: string;
  id_wilaya:   number;
  zone_sis:    string;
  latitude:    number;
  longitude:   number;
  date_debut:  string | null;
  date_fin:    string | null;
}