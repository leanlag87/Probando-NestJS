import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  //Todo lo que "creemos aqui" lo va a utilizar el controlador de proyectos
  private projects = [
    { id: 1, name: 'Proyecto 1', description: 'Descripción del Proyecto 1' },
    { id: 2, name: 'Proyecto 2', description: 'Descripción del Proyecto 2' },
    { id: 3, name: 'Proyecto 3', description: 'Descripción del Proyecto 3' },
  ];
  getAllProjects() {
    return this.projects; //Retornamos un arreglo de proyectos como ejemplo
  }
}
