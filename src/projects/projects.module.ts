import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
})

/**
 * Lo que hacemos aqui es implementar el middleware para que todas las rutas de este modulo pasen por el middleware
 * Se puede aplicar un middleware de forma global en main.ts o de forma local en el modulo como en este caso
 * De la forma que lo estoy aplicando es para todos las rutas "projects" pero se puede especificar las rutas de la sigueinte forma:
 * consumer.apply(LoggerMiddleware).forRoutes(
 * {path: 'projects', method: RequestMethod.GET}
 * );,
 * Le estamos diciendo que solo va a funcionar para las rutas GET de "projects"
 */
export class ProjectsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('projects'); //Aqui van los middlewares que queramos aplicar
  }
}
