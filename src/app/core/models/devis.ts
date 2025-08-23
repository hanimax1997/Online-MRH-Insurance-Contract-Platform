// devis.ts
// ────────────────────────────────────────────────────────────────────────────────
// Types pour les objets de base
export interface TypeClient {
  idParam: number;
  description: string;
  code: string;
}

export interface Duree {
  id_duree: number;
  type_duree: string;
  duree: number;
  description: string;
}

export interface Agence {
  idAgence: number;
  codeAgence: string;
  raisonSocial: string;
  adresse: string;
  email: string;
  telephone: string;
}

export interface Canal {
  idParam: number;
  description: string;
  code: string;
}

export interface Statue {
  idParam: number;
  description: string;
  code: string;
}

export interface Produit {
  idCodeProduit: number;
  codeProduit: string;
  description: string;
  brancheProduitSAP: string;
  sousProduits: any[];           // À détailler si nécessaire
}

// Primes
export interface TypePrime {
  idParam: number;
  description: string;
  code: string;
}
export interface PrimeList {
  idPrime: number;
  typePrime: TypePrime;
  prime: string | null;
  risque: number;
}

// Taxes
export interface TaxeType {
  idTaxe: number;
  idNational: string;
  description: string;
  valeurType: number;
  valeurMin: number;
  valeurMax: number;
  valeur: number;
  code: string;
  codeSAP: string;
  codeTaxe: string;
}
export interface TaxeList {
  idDevisTaxe: number;
  taxe: TaxeType;
  prime: string;
  risque: number;
}

// ────────────────────────────────────────────────────────────────────────────────
// NOUVEAU : Risque (corrige les erreurs TS2339)
export interface Risque {
  /* autres champs du risque si vous en avez */
  primeList: PrimeList[];        // ← ajouté
  taxeList: TaxeList[];          // ← ajouté
  [key: string]: any;            // flexibilité pour le reste
}

// NOUVEAU : hiérarchie groupeList / groupes (minimale)
export interface GroupeListItem {
  risque: Risque;
  [key: string]: any;            // ex. capitaux, garanties, etc.
}

export interface Groupe {
  groupeList: GroupeListItem[];
  [key: string]: any;            // ex. libellé, id, etc.
}

// ────────────────────────────────────────────────────────────────────────────────
// Devis conforme à la réponse API
export interface Devis {
  idDevis: number;
  typeClient: TypeClient;
  dateAssure: string;
  nom: string;
  pack: any;
  prenom: string;
  raisonSocial: string;
  telephone: string;
  email: string;
  duree: Duree;
  agence: Agence;
  canal: Canal;
  auditUser: string;
  auditDate: string;
  secteurActivite: any;
  masseSalariale: any;
  chiffreAffaire: any;
  jour: number;
  statue: Statue;
  sousProduit: any;
  produit: Produit;
  dateExpiration: string;
  reduction: any;
  groupes: Groupe[];             // ← typé au lieu de any[]
  primeList: PrimeList[];        // conservé si présent au niveau devis
  paramsRisqueDevisList: any[];
  listPrimes: any[];
  taxeList: TaxeList[];          // conservé si présent au niveau devis
}