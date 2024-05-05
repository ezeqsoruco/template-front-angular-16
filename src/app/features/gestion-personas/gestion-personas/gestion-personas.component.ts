import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { PersonaService } from 'src/app/core/services/persona.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-gestion-personas',
  templateUrl: './gestion-personas.component.html',
  styleUrls: ['./gestion-personas.component.css']
})
export class GestionPersonasComponent implements OnInit  {
  public columnas = ["Id","Nombre y Apellido", "DNI", "Provincia"]
  public filas: any[] = [];
  public acciones: SafeHtml = '';

  constructor(private personaService: PersonaService, private sanitizer: DomSanitizer){
    this.acciones = this.sanitizer.bypassSecurityTrustHtml('<button type="button" class="btn btn-success"><i class="bi bi-eye-fill"></i></button> <button type="button" class="btn btn-primary"><i class="bi bi-pencil-fill"></i></button> <button type="button" class="btn btn-danger"><i class="bi bi-trash3-fill"></i></button>');
  }

  ngOnInit() {
    this.personaService.getPersonas().subscribe({
      next: (data) => {
        this.filas = data.personas.map((x: Persona) => {
          return {
            "id": x.id,
            "nombre y apellido": `${x.nombre} ${x.apellido}`,
            "dni": x.dni,
            "provincia": x.provincia!.nombre
          }
        });
      },
    })
  }
}
