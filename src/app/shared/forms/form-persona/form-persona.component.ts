import { Component } from '@angular/core';
import { ProvinciaService } from 'src/app/core/services/provincia.service';
import { Provincia } from 'src/app/models/provincia';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent {
  provincias: Provincia[] = [];

  constructor(private provinciaService: ProvinciaService){}

  ngOnInit() {
    this.provinciaService.getProvincias()
    .subscribe({
        next: (p) => this.provincias = p, 
        error: (err: any) => {
        console.log(err);
        }
    });
  }
}
