import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers;

    //hacemos una validacion simple de autorizacion, en un caso real se haria con JWT u otro metodo
    if (!authorization) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    //Si el token no es valido, lanzamos una excepcion
    if (authorization !== 'abc1234') {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }

    next();
  }
}

/**
 * Cual seria la diferencia entre los middlewares y los guards?
 * Los middlewares se ejecutan antes de que la solicitud llegue al controlador, mientras que los guards se ejecutan despues de que la solicitud llega al controlador pero antes de que se ejecute el metodo del controlador
 * Los middlewares son ideales para tareas como el logging, parsing, validacion de solicitudes, etc.
 * Los guards son ideales para la autorizacion y autenticacion, ya que pueden acceder al contexto de la solicitud y al usuario autenticado
 */
