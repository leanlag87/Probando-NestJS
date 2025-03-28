//En este archivo definimos el controlador de tareas y la ruta para obtener todas las tareas

//importamos el decorador Controller de NestJS para crear un controlador
import { Controller, Get } from '@nestjs/common';

//Creamos el decorador Controller y la clase
@Controller({}) //Decorador que recibe un objeto de configuración
//Definimos la clase del controlador
export class TasksController {
  //importamos el decorador Get de NestJS para definir una ruta de tipo GET
  @Get('/') //Ruta para el Home Page
  index() {
    return 'Pagina Inicial'; //Retornamos un string
  }
  @Get('/tasks') //Decorador que recibe un string que define la ruta de la petición
  getAllTasks() {
    //Método que se ejecutará cuando se haga una petición GET a la ruta /tasks
    return 'Obteniendo todas las tareas 🤟'; //Retornamos un string
  }
} //Clase que exporta el controlador
