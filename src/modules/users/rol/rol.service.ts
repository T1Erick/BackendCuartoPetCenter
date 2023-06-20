import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { rolEntity } from './entities/rol.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { RolEventDto } from './dto/rol.dto';
import { ErrorManager } from 'src/utils/error.manage';
import { UpdateRolDto } from './dto/update.rol.dto';

@Injectable()
export class RolService {

    constructor(
        @InjectRepository(rolEntity) private rolEntityDto: Repository<rolEntity>
    ){}

    async create(createroleventDto: RolEventDto):Promise<rolEntity>{
        try {
            
            const rolcreate: rolEntity = await this.rolEntityDto.save(createroleventDto);
            return rolcreate;
        }
            catch(e){
                throw new Error(e)
            }
    }

    async findAll():Promise<rolEntity[]>{
        try{
            const rolall: rolEntity[]= await this.rolEntityDto.find();
            if(rolall.length ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen secciones registradas'
                });

            }
            return rolall
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async findOne(id:string): Promise<rolEntity>{
        try{
            return await this.rolEntityDto.createQueryBuilder('rol').where({id}).getOne();
        }
        catch(e){
            throw new Error(e)
        }
    }

    async update(id:string, updateroldto: UpdateRolDto):Promise<UpdateResult| undefined>{
        try{
            const updaterol: UpdateResult= await this.rolEntityDto.update(id,updateroldto);
            if(updaterol.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'La seccion no se pudo actualizar',
                });
            }
            return updaterol;
        }catch(e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async remove(id:string):Promise<DeleteResult | undefined>{
        try{
            const deleterol: DeleteResult = await this.rolEntityDto.delete(id);
            if(deleterol.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                        message:'La seccion no se pudo eliminar',

                })
            }
            return deleterol;
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
}
