import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Todas las rutas van a estar validadas por el ValidationPipe
  //Con esto ya no es necesario poner @UsePipes(new ValidationPipe()) en cada controlador
  app.useGlobalPipes(new ValidationPipe());
  //Usamos el ValidationPipe que nos da NestJS para validar los datos que vienen en las solicitudes
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
