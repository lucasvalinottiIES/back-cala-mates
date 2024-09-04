import { IsDecimal, IsNumber, IsString } from "class-validator";

export class CreateProductoDto {

  @IsString()
  tipo:string;

  @IsString()
  nombre:string;

  @IsNumber()
  precio:number;

  @IsString()
  foto:string;
}
