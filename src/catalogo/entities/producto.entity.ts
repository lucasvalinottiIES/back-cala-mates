import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Producto {

  @Prop({required: true})
  tipo: string;

  @Prop({unique: true, required: true})
  nombre: string;

  @Prop({required: true})
  precio: number;

  @Prop({default: ''})
  foto: string;
}


export const ProductoSchema = SchemaFactory.createForClass( Producto );