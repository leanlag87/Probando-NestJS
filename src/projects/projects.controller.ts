import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('/projects') //Decorador que recibe un objeto de configuración
// Por ejemplo si aqui @Controller('projects') la ruta seria localhost:3000/projects
export class ProjectsController {
  //Creamos el constructor para inyectar el servicio "IMPORTAMOS"
  constructor(private projectsService: ProjectsService) {}

  //Ahora creamos el endpoint para obtener todos los proyectos "EJECUTAMOS"
  @Get() //definimos la ruta para obtener todos los proyectos
  getAllProjects(@Query() query: any) {
    //El decorador @Query nos sirve para especificar cuantos parametros queremos recibir por query
    // Por ejemplo localhost:3000/projects?limit=10&offset=20 (le decimos que el limite es 10 y el offset 20)
    console.log(query);
    return this.projectsService.getAllProjects(); //Llamamos al metodo del servicio para obtener los proyectos
  }

  //Probamos los demas metodos HTTP (POST, PUT, DELETE)
  @Post()
  createProject(@Body() project: any) {
    //Se usa el decorador @Body para obtener los datos enviados en el cuerpo de la solicitud
    return this.projectsService.createProject(project);
  }

  @Put('/:id')
  updateProject() {
    return this.projectsService.updateProject();
  }

  @Delete('/:id')
  deleteProject() {
    return this.projectsService.deleteProject();
  }

  //Este metodo es ideal para actualizar cosas específicas
  @Patch('/:id')
  partiallyUpdateProject() {
    return this.projectsService.partiallyUpdateProject();
  }
}

/**
 * Quiero hacer la prueba si poniendo en el decorador @Controller '/projects' y luego en los que tienen
 * '/projects/:id' funciona igual cuando hago el testeo en insomnia/postman
 * Por ejemplo Post y Get quedaria vacio @Post() y Put quedaria @Put('/:id')
 *
 *{
	"BASE_PATH": "http://localhost:3000/"
}
 *
 */
