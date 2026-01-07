import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateProjectDto {
  //Con este decorador le decimos que este campo no puede estar vacio
  @IsNotEmpty()
  @MinLength(1) //Le decimos que el minimo de caracteres es 1
  id: number;
  @IsString()
  @MinLength(1)
  name: string;
  @IsString()
  @MinLength(1)
  description: string;
}

/**
 * Ejemplo de como creariamos un DTO para un usario con sus validaciones que nos da class-validator
 * export class CreateUserDto {
 *
 *  @IsNotEmpty()
 *  @MinLength(3)
 * username: string;
 *
 * @IsNotEmpty()
 * @MinLength(6)
 * password: string;
 *
 * @IsEmail() //validacion para correo electronico
 *  @IsNotEmpty() //El campo no puede estar vacio
 * @IsString() //El campo debe ser una cadena de texto
 * email: string;
 *
 * @IsNumber() //El campo debe ser un numero
 * @IsOptional() //El campo es opcional
 * @Max(120) //El valor maximo es 120 de su edad
 * age?: number;
 * }
 *
 * Cuales son las validaciones que nos da class-validator?
 * @IsNotEmpty() - El campo no puede estar vacio
 * @IsString() - El campo debe ser una cadena de texto
 * @IsNumber() - El campo debe ser un numero
 * @IsBoolean() - El campo debe ser un booleano
 * @IsEmail() - El campo debe ser un correo electronico valido
 * @MinLength(n) - El campo debe tener al menos n caracteres
 * @MaxLength(n) - El campo debe tener como maximo n caracteres
 * @Min(n) - El valor minimo es n
 * @Max(n) - El valor maximo es n
 * @IsOptional() - El campo es opcional
 * @Matches(regex) - El campo debe coincidir con la expresion regular
 * @IsDate() - El campo debe ser una fecha valida
 * @IsArray() - El campo debe ser un arreglo
 * @ArrayMinSize(n) - El arreglo debe tener al menos n elementos
 * @ArrayMaxSize(n) - El arreglo debe tener como maximo n elementos
 */
