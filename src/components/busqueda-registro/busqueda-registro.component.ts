import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda-registro',
  templateUrl: './busqueda-registro.component.html',
  styleUrls: ['./busqueda-registro.component.css']
})
export class BusquedaRegistroComponent implements OnInit {
  sexo: string = '';
  fechaIngreso: string = '';
  enfermedad: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  buscar(): void {
    // Construye la URL con los parámetros de búsqueda
    let searchParams = `sexo=${this.sexo}&fechaIngreso=${this.fechaIngreso}&enfermedad=${this.enfermedad}`;
    
    // Redirecciona a la ruta de búsqueda con los parámetros
    this.router.navigate(['/registro/busqueda', searchParams]);
  }
}
