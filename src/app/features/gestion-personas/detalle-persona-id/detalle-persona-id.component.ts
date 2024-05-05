import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from 'src/app/core/services/persona.service';

import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-detalle-persona-id',
  templateUrl: './detalle-persona-id.component.html',
  styleUrls: ['./detalle-persona-id.component.css']
})
export class DetallePersonaIdComponent {
  public id: any;
  public persona?: Persona;
  public botones: any[] = [
    {
      nombre: "Volver",
      class: "btn-secondary"
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

  manejarAccion(event: any) {
    this.router.navigate(['']);
  }
}
