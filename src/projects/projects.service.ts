import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  //Todo lo que "creemos aqui" lo va a utilizar el controlador de proyectos
  // Aqui podemos guardar los proyectos que nos envien desde el "front"
  private projects = [
    { id: 1, name: 'Proyecto 1', description: 'Descripción del Proyecto 1' },
    { id: 2, name: 'Proyecto 2', description: 'Descripción del Proyecto 2' },
    { id: 3, name: 'Proyecto 3', description: 'Descripción del Proyecto 3' },
  ];
  getAllProjects() {
    return this.projects; //Retornamos un arreglo de proyectos como ejemplo
  }

  getProjectById(id: number) {
    const projectFound = this.projects.find((project) => project.id === id);

    if (!projectFound) {
      //NotAcceptableException es una excepcion que nos da NestJS para manejar errores
      return new NotAcceptableException(`Proyecto con id ${id} no encontrado`);
    }

    return projectFound;
  }

  //Le pasamos el proyecto que queremos crear por parametro, se debe parar por parametro porque lo recibimos del controlador
  //Al pasarle del "DTO" "CreateProjectDto" le decimos que el proyecto que vamos a recibir debe tener la misma estructura
  createProject(project: CreateProjectDto) {
    console.log(project);
    this.projects.push(project); //Agregamos el nuevo proyecto al arreglo
    return project; //Retornamos el arreglo actualizado
  }

  updateProject() {
    return 'Actualizar un proyecto existente';
  }

  deleteProject() {
    return 'Eliminar un proyecto existente';
  }

  partiallyUpdateProject() {
    return 'Actualizar parcialmente un proyecto existente';
  }
}
