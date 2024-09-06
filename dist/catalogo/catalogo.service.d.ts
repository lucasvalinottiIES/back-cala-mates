import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { Model } from 'mongoose';
export declare class CatalogoService {
    private productoModel;
    constructor(productoModel: Model<Producto>);
    create(createProductoDto: CreateProductoDto): Promise<Producto>;
    findAll(): Promise<Producto[]>;
    findById(id: string): Promise<Producto>;
    findByTipo(tipo: string): Promise<Producto[]>;
    update(id: string, updateProductoDto: UpdateProductoDto): Promise<Producto>;
    remove(id: string): Promise<Producto>;
}
