import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';


import { CatalogoModule } from './catalogo/catalogo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot( process.env.MONGO_URI ),
    CatalogoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
