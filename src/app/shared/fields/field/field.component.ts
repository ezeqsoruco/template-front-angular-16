import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() public label = 'Default';
  @Input() public type = 'text';
  @Input() public placeholder = "";
  @Input() public minLength = 10;
  @Input() public maxLength = 150;
  @Input() public required = false;
  @Input() public deshabilitado = false;
  @Input() public value: any;
}
