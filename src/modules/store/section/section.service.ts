import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { sectionEntity } from './entities/section.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { sectionEventoDto } from './dto/section.dto';
import { ErrorManager } from 'src/utils/error.manage';
import { UpdatesectionEventoDto } from './dto/update.section.dto';

@Injectable()
export class SectionService {
    constructor(
        @InjectRepository(sectionEntity) private sectionEntityDto: Repository<sectionEntity>
    ){}

    async create(createsectioneventDto: sectionEventoDto):Promise<sectionEntity>{
        try {
            
            const sectioncreate: sectionEntity = await this.sectionEntityDto.save(createsectioneventDto);
            return sectioncreate;
        }
            catch(e){
                throw new Error(e)
            }
    }

    async findAll():Promise<sectionEntity[]>{
        try{
            const sectionall: sectionEntity[]= await this.sectionEntityDto.find();
            if(sectionall.length ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen secciones registradas'
                });

            }
            return sectionall
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async update(id:string, updatesectiondto: UpdatesectionEventoDto):Promise<UpdateResult| undefined>{
        try{
            const updatesection: UpdateResult= await this.sectionEntityDto.update(id,updatesectiondto);
            if(updatesection.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'La seccion  no se pudo actualizar',
                });
            }
            return updatesection;
        }catch(e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async remove(id:string):Promise<DeleteResult | undefined>{
        try{
            const deletesection: DeleteResult = await this.sectionEntityDto.delete(id);
            if(deletesection.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                        message:'La seccion  no se pudo eliminar',

                })
            }
            return deletesection;
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    
}
