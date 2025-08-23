import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { Constants } from '../config/constants';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  constructor(private http: HttpClient) { }
  getAllAgence() {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let user = sessionStorage.getItem("userId")
    
    let uri = Constants.API_ENDPOINT_AGENCE+'/AllVoyagiste';
    return this.http.get<any[]>(`${uri}`,httpOption).pipe(
      tap((response) => this.logs(response)),
      catchError((error) => throwError(error.error))
    );
  }
  logs(response: unknown): void {
  }

  getAgenceById(idAgence: any) {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    return this.http.get<any[]>(`${Constants.API_ENDPOINT_AGENCE}/${idAgence}`,httpOption).pipe(
      tap((response) => this.logs(response)),
      catchError((error) => throwError(error.error))
    );
  }
}