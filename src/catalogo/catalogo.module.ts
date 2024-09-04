import { Module } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CatalogoController } from './catalogo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Producto, ProductoSchema } from './entities/producto.entity';

@Module({
  controllers: [CatalogoController],
  providers: [CatalogoService],
  imports: [MongooseModule.forFeature([
    {
      name: Producto.name,
      schema: ProductoSchema
    }
  ])]
})
export class CatalogoModule {}
