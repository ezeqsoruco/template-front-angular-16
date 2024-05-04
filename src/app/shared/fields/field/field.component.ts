import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() label = 'Default';
  @Input() type = 'text';
  @Input() placeholder = "";
  @Input() minLength = 10;
  @Input() maxLength = 150;
  @Input() required = false;
}
