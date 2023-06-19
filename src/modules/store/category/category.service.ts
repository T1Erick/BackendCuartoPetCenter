
import { InjectRepository } from '@nestjs/typeorm';
import { categoryEntity } from './entities/category.entities';
import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { categoryEventoDto } from './dto/category.dto';
import { ErrorManager } from 'src/utils/error.manage';
import { UpdateCategoryDto } from './dto/update.category.dto';


@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(categoryEntity) private categoryEntityDto: Repository<categoryEntity>
    ){}

    async create(createcategoryeventDto: categoryEventoDto):Promise<categoryEntity>{
        try {
            const categorycreate: categoryEntity = await this.categoryEntityDto.save(createcategoryeventDto);
            return categorycreate;}catch(e){
                throw new Error(e)
            }
    }

    async findAll():Promise<categoryEntity[]>{
        try{
            const categoryall: categoryEntity[]= await this.categoryEntityDto.find();
            if(categoryall.length ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen categorias registradas'
                });

            }
            return categoryall
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async update(id:string, updatecategorydto: UpdateCategoryDto):Promise<UpdateResult| undefined>{
        try{
            const updatecategory: UpdateResult= await this.categoryEntityDto.update(id,updatecategorydto);
            if(updatecategory.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'La categoria no se pudo actualizar',
                });
            }
            return updatecategory;
        }catch(e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async remove(id:string):Promise<DeleteResult | undefined>{
        try{
            const deletecategory: DeleteResult = await this.categoryEntityDto.delete(id);
            if(deletecategory.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                        message:'La categoria no se pudo eliminar',

                })
            }
            return deletecategory;
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }


}
