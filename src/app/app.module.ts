import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FieldComponent } from './shared/fields/field/field.component';
import { SelectionFieldComponent } from './shared/fields/selection-field/selection-field.component';
import { FormPersonaComponent } from './shared/forms/form-persona/form-persona.component';
import { GestionPersonasComponent } from './features/gestion-personas/gestion-personas/gestion-personas.component';
import { TableComponent } from './shared/table/table.component';
import { DetallePersonaIdComponent } from './features/gestion-personas/detalle-persona-id/detalle-persona-id.component';
import { EditarPersonaIdComponent } from './features/gestion-personas/editar-persona-id/editar-persona-id.component';
import { ButtonComponent } from './shared/button/button.component';

const routes: Routes = [
  { path: '', component: GestionPersonasComponent },
  { path: 'detalle-persona/:id', component: DetallePersonaIdComponent },
  { path: 'editar-persona/:id', component: EditarPersonaIdComponent }  // Otras rutas de la aplicación
];

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    SelectionFieldComponent,
    FormPersonaComponent,
    GestionPersonasComponent,
    TableComponent,
    DetallePersonaIdComponent,
    EditarPersonaIdComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
