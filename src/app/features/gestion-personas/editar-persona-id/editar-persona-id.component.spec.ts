import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPersonaIdComponent } from './editar-persona-id.component';

describe('EditarPersonaIdComponent', () => {
  let component: EditarPersonaIdComponent;
  let fixture: ComponentFixture<EditarPersonaIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPersonaIdComponent]
    });
    fixture = TestBed.createComponent(EditarPersonaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
