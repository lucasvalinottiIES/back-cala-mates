import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('catalogo')
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @Post()
  create(@Body() createProductoDto: CreateProductoDto) {
    return this.catalogoService.create(createProductoDto);
  }

  @Get()
  findAll() {
    return this.catalogoService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.catalogoService.findById(id);
  }

  @Get('tipo/mates')
  findAllMates() {
    return this.catalogoService.findByTipo('mate');
  }

  @Get('tipo/yerbas')
  findAllYerbas() {
    return this.catalogoService.findByTipo('yerba');
  }
  @Get('tipo/accesorios')
  findAllAccesorios() {
    return this.catalogoService.findByTipo('accesorio');
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto) {
    return this.catalogoService.update(id, updateProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalogoService.remove(id);
  }
}
