// dictionnaire.ts  ✅
export class Dictionnaire {
  idParam?:     number;
  code?:        string;   // ← ajouté
  libelle?:     string;   // (souvent présent)
  description?: string;
  valeur?:      string | number; // si pertinent
  dateDebut?:   Date;
  auditUser?:   string;
}