export interface UpdateProjectDto {
  // id: number; no iria ya que es unico y no se debe actualizar
  //En este caso son opcionales porque podemos actualizar solo uno de los campos
  name?: string;
  description?: string;
}
