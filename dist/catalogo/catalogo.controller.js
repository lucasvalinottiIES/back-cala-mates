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
exports.CatalogoController = void 0;
const common_1 = require("@nestjs/common");
const catalogo_service_1 = require("./catalogo.service");
const create_producto_dto_1 = require("./dto/create-producto.dto");
const update_producto_dto_1 = require("./dto/update-producto.dto");
let CatalogoController = class CatalogoController {
    constructor(catalogoService) {
        this.catalogoService = catalogoService;
    }
    create(createProductoDto) {
        return this.catalogoService.create(createProductoDto);
    }
    findAll() {
        return this.catalogoService.findAll();
    }
    async findById(id) {
        return this.catalogoService.findById(id);
    }
    findAllMates() {
        return this.catalogoService.findByTipo('mate');
    }
    findAllYerbas() {
        return this.catalogoService.findByTipo('yerba');
    }
    findAllAccesorios() {
        return this.catalogoService.findByTipo('accesorio');
    }
    update(id, updateProductoDto) {
        return this.catalogoService.update(id, updateProductoDto);
    }
    remove(id) {
        return this.catalogoService.remove(id);
    }
};
exports.CatalogoController = CatalogoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_producto_dto_1.CreateProductoDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CatalogoController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)('tipo/mates'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "findAllMates", null);
__decorate([
    (0, common_1.Get)('tipo/yerbas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "findAllYerbas", null);
__decorate([
    (0, common_1.Get)('tipo/accesorios'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "findAllAccesorios", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_producto_dto_1.UpdateProductoDto]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatalogoController.prototype, "remove", null);
exports.CatalogoController = CatalogoController = __decorate([
    (0, common_1.Controller)('catalogo'),
    __metadata("design:paramtypes", [catalogo_service_1.CatalogoService])
], CatalogoController);
//# sourceMappingURL=catalogo.controller.js.map