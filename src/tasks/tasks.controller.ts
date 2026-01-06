//En este archivo definimos el controlador de tareas y la ruta para obtener todas las tareas

//importamos el decorador Controller de NestJS para crear un controlador
import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

//Creamos el decorador Controller y la clase
@Controller({}) //Decorador que recibe un objeto de configuración
// Por ejemplo si aqui @Controller('tasks') la ruta seria localhost:3000/tasks

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
  index() {
    return 'Pagina Inicial'; //Retornamos un string
  }

  // LLAMAMOS AL SERVICIO DE TAREAS PARA OBTENER TODAS LAS TAREAS
  @Get('/tasks') //Decorador que recibe un string que define la ruta de la petición
  getAllTasks() {
    //Método que se ejecutará cuando se haga una petición GET a la ruta /tasks
    //   return 'Obteniendo todas las tareas 🤟'; //Retornamos un string
    // }

    //Ahora llamamos al servicio de tareas para obtener todas las tareas
    return this.tasksService.getAllTasks(); //Retornamos el resultado del método getAllTasks del servicio de tareas
  } //Clase que exporta el controlador
}
