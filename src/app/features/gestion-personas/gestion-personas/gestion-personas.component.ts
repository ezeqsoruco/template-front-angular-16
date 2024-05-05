import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  public acciones: any[] = [
    {
      nombre:"ver",
      class: "btn btn-success",
      innerHTML: '<i class="bi bi-eye-fill"></i>'
    },
    {
      nombre:"editar",
      class: "btn btn-primary",
      innerHTML: '<i class="bi bi-pencil-fill"></i>'
    },
    {
      nombre:"eliminar",
      class: "btn btn-danger",
      innerHTML: '<i class="bi bi-trash3-fill"></i>'
    }
  ];

  constructor(private personaService: PersonaService, private router: Router){}

  ngOnInit() {
    this.personaService.getPersonas().subscribe({
      next: (data) => {
        this.filas = data.return.personas.map((x: Persona) => {
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

  redirectToDetalle(id: string) {
    this.router.navigate(["/detalle-persona",id]);
  }

  redirectToEditar(id: string) {
    this.router.navigate(["/editar-persona",id]);
  }

  eliminarPersona(id: string) {

  }

  manejarAccion(event: any) {
    switch(event.accion){
      case "ver": 
        this.redirectToDetalle(event.fila.id);
        break;
      case "editar":
        this.redirectToEditar(event.fila.id);
        break;
      case "eliminar": 
        this.eliminarPersona(event.fila.id);
        break;
    }
  }
}
