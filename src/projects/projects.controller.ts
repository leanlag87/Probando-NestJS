import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller({}) //Decorador que recibe un objeto de configuración
// Por ejemplo si aqui @Controller('projects') la ruta seria localhost:3000/projects
export class ProjectsController {
  //Creamos el constructor para inyectar el servicio "IMPORTAMOS"
  constructor(private projectsService: ProjectsService) {}

  //Ahora creamos el endpoint para obtener todos los proyectos "EJECUTAMOS"
  @Get('/projects') //definimos la ruta para obtener todos los proyectos
  getAllProjects() {
    return this.projectsService.getAllProjects(); //Llamamos al metodo del servicio para obtener los proyectos
  }
}
