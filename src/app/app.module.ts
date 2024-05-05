import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FieldComponent } from './shared/fields/field/field.component';
import { SelectionFieldComponent } from './shared/fields/selection-field/selection-field.component';
import { FormPersonaComponent } from './shared/forms/form-persona/form-persona.component';
import { GestionPersonasComponent } from './features/gestion-personas/gestion-personas/gestion-personas.component';
import { TableComponent } from './shared/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    SelectionFieldComponent,
    FormPersonaComponent,
    GestionPersonasComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
