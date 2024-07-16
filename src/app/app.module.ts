import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PacienteService } from '../services/paciente.service'; // Importa el servicio

@NgModule({
  declarations: [
    AppComponent
    // Otros componentes
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // Otros módulos
  ],
  providers: [
    PacienteService // Registra el servicio aquí
    // Otros servicios si los hay
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
