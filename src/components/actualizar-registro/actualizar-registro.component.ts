import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-actualizar-registro',
  templateUrl: './actualizar-registro.component.html',
  styleUrls: ['./actualizar-registro.component.css']
})
export class ActualizarRegistroComponent implements OnInit {
  pacienteForm: FormGroup;
  pacienteId: string;

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.pacienteForm = this.fb.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(0)]],
      sexo: ['', Validators.required],
      fotoPersonal: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      enfermedad: ['', Validators.required],
      revisado: [false]
    });

    this.pacienteId = this.route.snapshot.paramMap.get('id') || '';
  }

  ngOnInit(): void {
    this.pacienteService.getPaciente(this.pacienteId).subscribe((paciente: Paciente) => {
      this.pacienteForm.patchValue(paciente);
    });
  }

  onSubmit(): void {
    if (this.pacienteForm.valid) {
      const updatedPaciente: Paciente = this.pacienteForm.value;
      this.pacienteService.updatePaciente(this.pacienteId, updatedPaciente).subscribe(() => {
        this.router.navigate(['/registro/listar-todos']);
      });
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
}
