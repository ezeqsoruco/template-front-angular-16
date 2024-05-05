import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPersonasComponent } from './gestion-personas.component';

describe('TablaPersonasComponent', () => {
  let component: GestionPersonasComponent;
  let fixture: ComponentFixture<GestionPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionPersonasComponent]
    });
    fixture = TestBed.createComponent(GestionPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
