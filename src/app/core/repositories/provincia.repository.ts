import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'enviroment';
import { Provincia } from 'src/app/models/provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaRepository {
  private apiUrl = `${environment.apiUrl}/Provincias` ;

  constructor(private http: HttpClient) { }

  getProvincias(): Observable<Provincia[]> {
    return this.http.get<Provincia[]>(`${this.apiUrl}`);
  }
}
