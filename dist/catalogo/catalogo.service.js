"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const producto_entity_1 = require("./entities/producto.entity");
const mongoose_2 = require("mongoose");
let CatalogoService = class CatalogoService {
    constructor(productoModel) {
        this.productoModel = productoModel;
    }
    async create(createProductoDto) {
        try {
            const newProduct = new this.productoModel(createProductoDto);
            return await newProduct.save();
        }
        catch (error) {
            if (error.code === 11000) {
                throw new common_1.BadRequestException(`${createProductoDto.nombre} ya existe!`);
            }
            throw new common_1.InternalServerErrorException('Todo lo que podia fallar ha fallado!');
        }
    }
    async findAll() {
        return this.productoModel.find().exec();
    }
    async findById(id) {
        const producto = await this.productoModel.findById(id).exec();
        if (!producto) {
            throw new common_1.NotFoundException(`Producto con ID ${id} no encontrado`);
        }
        return producto;
    }
    async findByTipo(tipo) {
        return this.productoModel.find({ tipo }).exec();
    }
    async update(id, updateProductoDto) {
        return this.productoModel.findByIdAndUpdate(id, updateProductoDto, { new: true }).exec();
    }
    async remove(id) {
        return this.productoModel.findByIdAndDelete(id).exec();
    }
};
exports.CatalogoService = CatalogoService;
exports.CatalogoService = CatalogoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(producto_entity_1.Producto.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CatalogoService);
//# sourceMappingURL=catalogo.service.js.map