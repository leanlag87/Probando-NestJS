//Creamos el decorador y la clase
import { Module } from '@nestjs/common'; //Importamos el decorador Module de NestJS para crear un módulo
import { TasksController } from './tasks.controller';

@Module({
  controllers: [TasksController], //Definimos un arreglo de controladores
}) //Decorador que recibe un objeto de configuración
export class TasksModule {} //Clase que exporta el módulo
