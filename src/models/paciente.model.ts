export class Paciente {
  id: string; // Cambiado de _id a id
  rut: string;
  nombre: string;
  edad: number;
  sexo: string;
  fotoPersonal: string;
  fechaIngreso: Date;
  enfermedad: string;
  revisado: boolean;

  constructor(
    id: string, // Cambiado de _id a id
    rut: string,
    nombre: string,
    edad: number,
    sexo: string,
    fotoPersonal: string,
    fechaIngreso: Date,
    enfermedad: string,
    revisado: boolean
  ) {
    this.id = id;
    this.rut = rut;
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.fotoPersonal = fotoPersonal;
    this.fechaIngreso = fechaIngreso;
    this.enfermedad = enfermedad;
    this.revisado = revisado;
  }
}
