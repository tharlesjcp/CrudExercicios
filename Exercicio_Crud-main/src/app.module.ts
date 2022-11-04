import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';



@Module({
  imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'rootroot',
    database: 'db_lojagames',
    entities: [Produto, Categoria],
    synchronize: true
   }),
    CategoriaModule,
    ProdutoModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
