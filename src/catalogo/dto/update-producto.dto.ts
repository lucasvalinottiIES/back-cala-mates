import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import { IsDecimal, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsNumber()
  precio?: number;

  @IsOptional()
  @IsString()
  tipo?: string;
  
  @IsOptional()
  @IsString()
  foto?: string;
}
