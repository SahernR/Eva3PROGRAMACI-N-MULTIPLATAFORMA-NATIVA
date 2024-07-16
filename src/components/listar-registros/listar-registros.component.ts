import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente.model';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-listar-registros',
  templateUrl: './listar-registros.component.html',
  styleUrls: ['./listar-registros.component.css']
})
export class ListarRegistrosComponent implements OnInit {
  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.obtenerTodosPacientes();
  }

  obtenerTodosPacientes(): void {
    this.pacienteService.getPacientes().subscribe((data: Paciente[]) => {
      this.pacientes = data;
    });
  }
}
