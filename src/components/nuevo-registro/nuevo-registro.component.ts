import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente.model';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.css']
})
export class NuevoRegistroComponent implements OnInit {
  pacienteForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService,
    private router: Router
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
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.pacienteForm.valid) {
      const newPaciente: Paciente = this.pacienteForm.value;
      this.pacienteService.addPaciente(newPaciente).subscribe(() => {
        this.router.navigate(['/registro/listar-todos']);
      });
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
}
