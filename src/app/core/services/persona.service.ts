import { Injectable } from '@angular/core';
import { PersonaRepository } from '../repositories/persona/persona.repository';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private personaRepository: PersonaRepository) { }

  getPersonas(): Observable<any> {
    return this.personaRepository.getPersonas();
  }

  getPersona(id: string): Observable<any> {
    return this.personaRepository.getPersona(id);
  }
}
