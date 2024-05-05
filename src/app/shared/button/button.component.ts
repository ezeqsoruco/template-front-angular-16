import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() public botones: any[] = [];
  @Output() public accionRealizada = new EventEmitter<{ accion: string }>();

  ejecutarAccion() {
    this.accionRealizada.emit()
  }
}
