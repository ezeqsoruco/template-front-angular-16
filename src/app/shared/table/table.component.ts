import { Component, Input, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() public columnas: string[] = [];
  @Input() public filas: any [] = [];
  @Input() public acciones: any[] = [];

  @Output() accionRealizada = new EventEmitter<{ accion: string, fila: any }>();


  ejecutarAccion(accion: string, fila: any) {
    this.accionRealizada.emit({accion, fila});
  }
}
