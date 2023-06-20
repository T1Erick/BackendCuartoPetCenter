import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { productsEntity } from './entities/products.entity';
import { productEventoDto } from './dto/products.dto';
import { ErrorManager } from 'src/utils/error.manage';
import { UpdateProductEventoDto } from './dto/update.products.dto';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(productsEntity) private productsEntityDto: Repository<productsEntity>
    ){}

    async create(createproductseventDto: productEventoDto):Promise<productsEntity>{
        try {
            
            const productscreate: productsEntity = await this.productsEntityDto.save(createproductseventDto);
            return productscreate;
        }
            catch(e){
                throw new Error(e)
            }
    }

    async findAll():Promise<productsEntity[]>{
        try{
            const productsall: productsEntity[]= await this.productsEntityDto.find();
            if(productsall.length ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen productos registradas'
                });

            }
            return productsall
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async update(id:string, updateproductsdto: UpdateProductEventoDto):Promise<UpdateResult| undefined>{
        try{
            const updateproducts: UpdateResult= await this.productsEntityDto.update(id,updateproductsdto);
            if(updateproducts.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'El producto  no se pudo actualizar',
                });
            }
            return updateproducts;
        }catch(e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async remove(id:string):Promise<DeleteResult | undefined>{
        try{
            const deleteproduct: DeleteResult = await this.productsEntityDto.delete(id);
            if(deleteproduct.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                        message:'El producto  no se pudo eliminar',

                })
            }
            return deleteproduct;
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
}
