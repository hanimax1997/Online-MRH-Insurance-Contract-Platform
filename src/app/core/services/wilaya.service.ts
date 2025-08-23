// services/wilaya.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Commune } from '../models/commune.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WilayaService {
  private readonly API_URL_Communes = environment.url+'/api/produit/risqueParametre/fromtable/127/';

  constructor(private http: HttpClient) {}

  /** • Retourne toutes les communes */
  getCommunes(): Observable<Commune[]> {
    return this.http.get<Commune[]>(this.API_URL_Communes);
  }

  /** • Filtre les communes d’une wilaya précise */
  getCommunesByWilaya(idWilaya: number): Observable<Commune[]> {
    return this.getCommunes().pipe(
      map(list => list.filter(c => c.id_wilaya === idWilaya))
    );
  }

  /** • Regroupe toutes les communes par wilaya { 15: [...], 16: [...] } */
  getCommunesGrouped(): Observable<Record<number, Commune[]>> {
    return this.getCommunes().pipe(
      map(list =>
        list.reduce<Record<number, Commune[]>>((acc, c) => {
          (acc[c.id_wilaya] ??= []).push(c);
          return acc;
        }, {})
      )
    );
  }
}