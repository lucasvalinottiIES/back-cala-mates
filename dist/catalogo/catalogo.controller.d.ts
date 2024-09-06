import { CatalogoService } from './catalogo.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class CatalogoController {
    private readonly catalogoService;
    constructor(catalogoService: CatalogoService);
    create(createProductoDto: CreateProductoDto): Promise<import("./entities/producto.entity").Producto>;
    findAll(): Promise<import("./entities/producto.entity").Producto[]>;
    findById(id: string): Promise<import("./entities/producto.entity").Producto>;
    findAllMates(): Promise<import("./entities/producto.entity").Producto[]>;
    findAllYerbas(): Promise<import("./entities/producto.entity").Producto[]>;
    findAllAccesorios(): Promise<import("./entities/producto.entity").Producto[]>;
    update(id: string, updateProductoDto: UpdateProductoDto): Promise<import("./entities/producto.entity").Producto>;
    remove(id: string): Promise<import("./entities/producto.entity").Producto>;
}
