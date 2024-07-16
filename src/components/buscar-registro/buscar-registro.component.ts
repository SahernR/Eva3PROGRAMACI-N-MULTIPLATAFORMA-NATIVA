import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-buscar-registro',
  templateUrl: './buscar-registro.component.html',
  styleUrls: ['./buscar-registro.component.css']
})
export class BuscarRegistroComponent implements OnInit {
  pacientes: Paciente[] = [];
  sexo: string = '';
  fechaIngreso: string = '';
  enfermedad: string = '';

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {}

  buscarPacientes(): void {
    this.pacienteService.buscarPacientes(this.sexo, this.fechaIngreso, this.enfermedad).subscribe((data: Paciente[]) => {
      this.pacientes = data;
    });
  }
}
