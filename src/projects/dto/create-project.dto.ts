import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProjectDto {
  //Con este decorador le decimos que este campo no puede estar vacio
  @IsNotEmpty()
  id: number;
  @IsString()
  name: string;
  @IsString()
  description: string;
}
