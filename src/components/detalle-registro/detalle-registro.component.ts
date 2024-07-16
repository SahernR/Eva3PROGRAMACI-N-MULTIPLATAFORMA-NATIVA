import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.component.html',
  styleUrls: ['./detalle-registro.component.css']
})
export class DetalleRegistroComponent implements OnInit {
  paciente: Paciente | undefined;

  constructor(
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pacienteService.getPaciente(id).subscribe((data: Paciente) => {
        this.paciente = data;
      });
    }
  }

  deletePaciente(): void {
    if (this.paciente) {
      this.pacienteService.eliminarPaciente(this.paciente.id).subscribe(() => { // Cambiado de a id
        this.router.navigate(['/registro/listar-todos']);
      });
    }
  }
}

