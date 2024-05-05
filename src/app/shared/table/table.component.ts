import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() public columnas: string[] = [];
  @Input() public filas: any [] = [];
  @Input() public acciones: any | undefined;
}
