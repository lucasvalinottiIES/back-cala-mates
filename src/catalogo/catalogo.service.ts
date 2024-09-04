import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import {  CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Producto } from './entities/producto.entity';
import { Model } from 'mongoose';

@Injectable()
export class CatalogoService {

  constructor(
    @InjectModel(Producto.name) 
    private productoModel: Model<Producto>
  ){}

  async create(createProductoDto: CreateProductoDto):Promise<Producto> {

    try {
      const newProduct = new this.productoModel( createProductoDto );
      return await newProduct.save();
    } catch (error) {
      if( error.code === 11000){
        throw new BadRequestException(`${createProductoDto.nombre} ya existe!`);
      }
      throw new InternalServerErrorException('Todo lo que podia fallar ha fallado!');
    }
  }

  async findAll(): Promise<Producto[]> {
    return this.productoModel.find().exec();
  }
  
  async findById(id: string): Promise<Producto> {
    const producto = await this.productoModel.findById(id).exec();
    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }
    return producto;
  }

  async findByTipo(tipo: string): Promise<Producto[]> {
    return this.productoModel.find({ tipo }).exec();
  }

  async update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto> {
    return this.productoModel.findByIdAndUpdate(id, updateProductoDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Producto> {
    return this.productoModel.findByIdAndDelete(id).exec();
  }
}
