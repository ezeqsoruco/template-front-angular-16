import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/core/services/persona.service';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-editar-persona-id',
  templateUrl: './editar-persona-id.component.html',
  styleUrls: ['./editar-persona-id.component.css']
})
export class EditarPersonaIdComponent {
  public id: any;
  public persona?: Persona;
  public botones: any[] = [
    {
      nombre: "Volver",
      class: "btn-secondary"
    },
    {
      nombre: "Guardar",
      class: "btn-primary"
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute, private personaService: PersonaService){}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.personaService.getPersona(this.id).subscribe({
      next: (data) => {this.persona = data.return},
      error: (err) => console.log(err)
    })
  }

  actualizarPersona() {
    console.log(this.persona);
  }

  manejarAccion(event: any) {
    switch(event.accion) {
      case "Volver":
        this.router.navigate(['']);
        break;
      case "Guardar":
        this.actualizarPersona();
        break;
    }
  }
}
