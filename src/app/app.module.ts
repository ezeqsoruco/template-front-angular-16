import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FieldComponent } from './shared/fields/field/field.component';
import { SelectionFieldComponent } from './shared/fields/selection-field/selection-field.component';
import { FormPersonaComponent } from './shared/forms/form-persona/form-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    SelectionFieldComponent,
    FormPersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
