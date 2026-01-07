import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Todas las rutas van a estar validadas por el ValidationPipe teniendo en cuenta los DTOs creados
  //Con esto ya no es necesario poner @UsePipes(new ValidationPipe()) en cada controlador
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Elimina las propiedades que no estan en el DTO
      forbidNonWhitelisted: true, //Lanza un error si hay propiedades que no estan en el DTO
      //transform: true, //Transforma los parametros al tipo definido en el DTO
    }),
  );
  //Usamos el ValidationPipe que nos da NestJS para validar los datos que vienen en las solicitudes
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
