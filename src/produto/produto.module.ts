import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoController } from "./constrollers/produto.controllers";
import { Produto } from "./entities/produto.entity";
import { ProdutoService } from "./services/produto.service";

@Module({
    controllers: [ProdutoController],
    exports: [TypeOrmModule],
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [ProdutoService]
})
export class ProdutoModule{}