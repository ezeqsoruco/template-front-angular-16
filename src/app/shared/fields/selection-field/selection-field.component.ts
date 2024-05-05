import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection-field',
  templateUrl: './selection-field.component.html',
  styleUrls: ['./selection-field.component.css']
})
export class SelectionFieldComponent {
  @Input() label = 'Default';
  @Input() opciones: any[] = [];
}
