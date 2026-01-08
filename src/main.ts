import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

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

  //Configuracion de Swagger
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  //Usamos el ValidationPipe que nos da NestJS para validar los datos que vienen en las solicitudes
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
