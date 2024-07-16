import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente.model';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'http://localhost:3000/api/pacientes'; // Reemplaza con la URL de backend

  constructor(private http: HttpClient) {}

  // Método para obtener todos los pacientes
  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.apiUrl);
  }

  // Método para obtener un paciente por ID
  getPaciente(id: string): Observable<Paciente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Paciente>(url);
  }

  // Método para agregar un nuevo paciente
  agregarPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.apiUrl, paciente);
  }

  // Método para actualizar un paciente existente
  actualizarPaciente(id: string, paciente: Paciente): Observable<Paciente> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Paciente>(url, paciente);
  }

  // Método para eliminar un paciente por ID
  eliminarPaciente(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  // Método para buscar pacientes por criterios
  buscarPacientes(sexo: string, fechaIngreso: string, enfermedad: string): Observable<Paciente[]> {
    const params = { sexo, fechaIngreso, enfermedad };
    return this.http.get<Paciente[]>(`${this.apiUrl}/buscar`, { params });
  }
}
