"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogoModule = void 0;
const common_1 = require("@nestjs/common");
const catalogo_service_1 = require("./catalogo.service");
const catalogo_controller_1 = require("./catalogo.controller");
const mongoose_1 = require("@nestjs/mongoose");
const producto_entity_1 = require("./entities/producto.entity");
let CatalogoModule = class CatalogoModule {
};
exports.CatalogoModule = CatalogoModule;
exports.CatalogoModule = CatalogoModule = __decorate([
    (0, common_1.Module)({
        controllers: [catalogo_controller_1.CatalogoController],
        providers: [catalogo_service_1.CatalogoService],
        imports: [mongoose_1.MongooseModule.forFeature([
                {
                    name: producto_entity_1.Producto.name,
                    schema: producto_entity_1.ProductoSchema
                }
            ])]
    })
], CatalogoModule);
//# sourceMappingURL=catalogo.module.js.map