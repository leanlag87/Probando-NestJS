//En este archivo definimos el controlador de tareas y la ruta para obtener todas las tareas

//importamos el decorador Controller de NestJS para crear un controlador
import {
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { TasksService } from './tasks.service';
import { ValidateUserPipe } from './pipe/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

//Creamos el decorador Controller y la clase
@Controller({}) //Decorador que recibe un objeto de configuración
// Por ejemplo si aqui @Controller('tasks') la ruta seria localhost:3000/tasks

//Agregamos el tag "tasks" para documentar con swagger
//De esta forma todas las rutas de este controlador tendran el tag "tasks"
@ApiTags('tasks')

//Definimos la clase del controlador
export class TasksController {
  //Creo una variable y de digo de que tipo es
  //tasksService: TasksService; //sirve para definir el tipo de la variable

  //Creamos el contructor de la clase y definimos el servicio de tareas con su tipo
  //Con esto podemos usar los metodos del servicio de tareas en el controlador
  // constructor(tasksService: TasksService) {
  //   this.tasksService = tasksService; //Asignamos el servicio de tareas a la variable
  // }

  //Forma mas "resumida" de hacer lo mismo que arriba
  constructor(private tasksService: TasksService) {}

  // ESTA ES UNA FORMA SIN USAR "SERVICE" RETORNAMOS DIRECTAMENTE DESDE EL CONTROLADOR
  //importamos el decorador Get de NestJS para definir una ruta de tipo GET
  @Get('/') //Ruta para el Home Page
  //De esta forma le ponemos una descripcion a la ruta para documentacion en swagger
  @ApiOperation({ summary: 'Página de inicio' })
  //De esta forma definimos la respuesta esperada para documentacion en swagger
  @ApiResponse({
    status: 200,
    description: 'Página de inicio obtenida correctamente.',
  })
  index(@Req() request: Request, @Res() response: Response) {
    //esto seria usando la sintaxis de express, no es necesario en nestjs, pero se puede usar
    console.log(request.url);
    return response.status(200).json({
      message: 'Bienvenido a el Home Page 🏠',
    });
  }

  // LLAMAMOS AL SERVICIO DE TAREAS PARA OBTENER TODAS LAS TAREAS
  @Get('/tasks') //Decorador que recibe un string que define la ruta de la petición
  //De esta forma le ponemos una descripcion a la ruta para documentacion en swagger
  @ApiOperation({ summary: 'Obtener todas las tareas' })

  //De esta forma definimos la respuesta esperada para documentacion en swagger
  @ApiResponse({
    status: 200,
    description: 'Lista de tareas obtenida correctamente.',
  })
  getAllTasks() {
    //Método que se ejecutará cuando se haga una petición GET a la ruta /tasks
    //   return 'Obteniendo todas las tareas 🤟'; //Retornamos un string
    // }

    //Ahora llamamos al servicio de tareas para obtener todas las tareas
    return this.tasksService.getAllTasks(); //Retornamos el resultado del método getAllTasks del servicio de tareas
  } //Clase que exporta el controlador

  //Creamos de ejemplo un endpoint que retorne un codigo de estado 404
  @Get('notfound')
  @HttpCode(404) //Decorador para definir el codigo de estado de la respuesta
  notFound() {
    return {
      message: 'Recurso no encontrado',
    };
  }

  //Funfion de tipo GET que reciba un parametro por la URL y lo retorne sumandole 8
  @Get('ticket/:num')
  getNumbrer(@Param('num', ParseIntPipe) num: number) {
    return num + 8;
  }

  //Funcion de tipo GET con un Pipe personalizado para validar los query params
  @Get('task-user/:userId')
  @UseGuards(AuthGuard) //Usamos el guardia de autenticacion en esta ruta
  getUserTask(@Query(ValidateUserPipe) query: { name: string; age: number }) {
    return 'Hola ' + query.name + ', tienes ' + query.age + ' años.';
  }
}
