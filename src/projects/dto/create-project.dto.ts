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
