import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePersonaIdComponent } from './detalle-persona-id.component';

describe('DetallePersonaIdComponent', () => {
  let component: DetallePersonaIdComponent;
  let fixture: ComponentFixture<DetallePersonaIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePersonaIdComponent]
    });
    fixture = TestBed.createComponent(DetallePersonaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
