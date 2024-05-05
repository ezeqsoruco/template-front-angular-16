import { Component, Input, OnInit  } from '@angular/core';
import { ProvinciaService } from 'src/app/core/services/provincia.service';
import { Persona } from 'src/app/models/persona';
import { Provincia } from 'src/app/models/provincia';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {
  public provincias: Provincia[] = [];
  @Input() public persona?: Persona;
  @Input() public deshabilitado: boolean = true;

  constructor(private provinciaService: ProvinciaService){}

  ngOnInit() {
    this.provinciaService.getProvincias()
    .subscribe({
        next: (data: any) => {
          this.provincias = data.return.provincias
        }, 
        error: (err: any) => {
        console.log(err);
        }
    });
  }
}
