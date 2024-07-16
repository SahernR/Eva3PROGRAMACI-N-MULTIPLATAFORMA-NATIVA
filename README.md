# Evaluacion 3 PROGRAMACIÓN MULTIPLATAFORMA NATIVA ::: Sebastian Ahern :::

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Proyecto Hospital El Alerce - Sistema de Gestión de Pacientes

## Descripción del Proyecto

El proyecto "Sistema de Gestión de Pacientes" para el Hospital El Alerce tiene como objetivo desarrollar una aplicación multiplataforma para la administración de datos de pacientes, utilizando Angular como framework frontend. La aplicación permitirá realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre la información de los pacientes almacenada en un backend RESTful desarrollado previamente con Node.js y MongoDB.

## Características del Proyecto

- **Framework Frontend:** Angular
- **Backend:** Node.js, Express.js, MongoDB
- **Componentes Principales:**
  - **Home:** Página de inicio con información general y acceso rápido a otras secciones.
  - **Nuevo Registro:** Formulario para añadir nuevos pacientes.
  - **Actualizar Registro:** Formulario para modificar información de pacientes existentes.
  - **Detalle de Registro:** Visualización detallada de la información de un paciente específico.
  - **Buscar Registro:** Funcionalidad para buscar pacientes por diferentes criterios.
  - **Listar Registros:** Listado de todos los pacientes registrados.
- **Validaciones y Funcionalidades:**
  - Validación de ingreso de datos utilizando *ngIf en Angular.
  - Uso de directivas como *ngFor para la visualización dinámica de datos.
  - Enlaces de navegación y redirecciones entre diferentes componentes.
  - Integración con servicios RESTful para comunicación con el backend.

## Estructura del Proyecto

El proyecto está estructurado en diferentes capas:
- **Componentes:** Contienen la lógica de presentación y manejo de datos de cada sección de la aplicación.
- **Servicios:** Conectan los componentes con el backend, realizando peticiones HTTP para obtener y enviar datos.
- **Modelos:** Definen las estructuras de datos utilizadas en la aplicación, como el modelo de la clase `Paciente`.

## Configuración y Ejecución

Para ejecutar el proyecto localmente:

1. Clona el repositorio desde GitHub.
2. Instala las dependencias utilizando npm o yarn.
3. Inicia el servidor de desarrollo con el comando `ng serve`.
4. Accede a la aplicación en tu navegador mediante la URL `http://localhost:4200`.

## Contribuciones y Contacto

---

Este archivo Markdown proporciona una descripción general del proyecto con fines netamente academicos utilizando Angular en el contexto del Hospital El Alerce, destacando sus características, estructura y cómo ejecutarlo localmente. Puedes personalizarlo y agregar más detalles según las especificaciones y avances del proyecto.

███████╗███████╗██████╗  █████╗ ███████╗████████╗██╗ █████╗ ███╗   ██╗     █████╗ ██╗  ██╗███████╗██████╗ ███╗   ██╗
██╔════╝██╔════╝██╔══██╗██╔══██╗██╔════╝╚══██╔══╝██║██╔══██╗████╗  ██║    ██╔══██╗██║  ██║██╔════╝██╔══██╗████╗  ██║
███████╗█████╗  ██████╔╝███████║███████╗   ██║   ██║███████║██╔██╗ ██║    ███████║███████║█████╗  ██████╔╝██╔██╗ ██║
╚════██║██╔══╝  ██╔══██╗██╔══██║╚════██║   ██║   ██║██╔══██║██║╚██╗██║    ██╔══██║██╔══██║██╔══╝  ██╔══██╗██║╚██╗██║
███████║███████╗██████╔╝██║  ██║███████║   ██║   ██║██║  ██║██║ ╚████║    ██║  ██║██║  ██║███████╗██║  ██║██║ ╚████║
╚══════╝╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
                                                                                                                    