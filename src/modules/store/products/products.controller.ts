import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductEventoDto } from './dto/update.products.dto';
import { productEventoDto } from './dto/products.dto';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService) {}

    @Post()
    async create(@Body() productRolDto:productEventoDto){
        return await this.productService.create(productRolDto);
    }


    @Get()
    async findAll(){
        return await this.productService.findAll()
    }
    @Patch(':id')
    async update(@Param('id') id:string,@Body() updateproductDto: UpdateProductEventoDto){
        return await this.productService.update(id, updateproductDto)
    }

    @Delete(':id')
    async remove(@Param('id') id:string){
        return await this.productService.remove(id);
    }
}
