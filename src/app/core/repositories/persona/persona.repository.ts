import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaRepository {
  private apiUrl = `${environment.apiUrl}/Personas` ;

  constructor(private httpClient: HttpClient) { }

  getPersonas(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }

  getPersona(id: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }
}
