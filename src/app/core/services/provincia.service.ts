import { Injectable } from '@angular/core';
import { ProvinciaRepository } from '../repositories/provincia/provincia.repository';
import { Observable } from 'rxjs';
import { Provincia } from 'src/app/models/provincia';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  constructor(private provinciaRepository: ProvinciaRepository) { }

  getProvincias(): Observable<any> {
    return this.provinciaRepository.getProvincias();
  }
}
