import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //Ejemplo de uso del contexto para obtener la request
    //lo que estamos haciendo es crear una constante request que obtiene la request del contexto
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);

    return true;
  }
}

/**
 * Este guardia de autenticacion (AuthGuard) implementa la interfaz CanActivate de NestJS.
 * Los "guards" podrian servir para verifcar roles de usuario, permisos, autenticacion, etc.
 * En este ejemplo, simplemente obtiene la request del contexto y la imprime en consola.
 * Finalmente, siempre retorna true, permitiendo el acceso a la ruta protegida.
 *
 * Ejemplo de como comprobariamos un rol de usuario con un guardia:
 * ```typescript
 * @Injectable()
 * export class RolesGuard implements CanActivate {
 *   canActivate(
 *    context: ExecutionContext,
 *  ): boolean | Promise<boolean> | Observable<boolean> {
 *   const request = context.switchToHttp().getRequest();
 *   const user = request.user;
 *   return user && user.roles && user.roles.includes('admin');
 * } }
 * ```
 * En este ejemplo, el guardia RolesGuard verifica si el usuario tiene el rol 'admin' antes de permitir el acceso a la ruta.
 *
 * */
