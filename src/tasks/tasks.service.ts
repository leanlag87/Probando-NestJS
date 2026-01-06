import { Injectable } from '@nestjs/common';

//Aqui es donde creamos la logica que se va a utilizar en el controlador de tareas
// Por ejemplo, obtener todas las tareas, crear una tarea, actualizar una tarea, eliminar una tarea, etc.

@Injectable()
export class TasksService {
  getAllTasks() {
    return ['Tarea 1', 'Tarea 2', 'Tarea 3']; //Retornamos un arreglo de tareas como ejemplo
  }
}
