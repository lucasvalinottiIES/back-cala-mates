export declare class Producto {
    tipo: string;
    nombre: string;
    precio: number;
    foto: string;
}
export declare const ProductoSchema: import("mongoose").Schema<Producto, import("mongoose").Model<Producto, any, any, any, import("mongoose").Document<unknown, any, Producto> & Producto & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Producto, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Producto>> & import("mongoose").FlatRecord<Producto> & {
    _id: import("mongoose").Types.ObjectId;
}>;
