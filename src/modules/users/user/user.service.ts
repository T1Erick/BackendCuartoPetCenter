import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { usersEntity } from './entities/users.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { userEventoDto } from './dto/users.dto';
import { ErrorManager } from 'src/utils/error.manage';
import { UpdateUserEventoDto } from './dto/update.users.dto';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(usersEntity) private usersEntityDto: Repository<usersEntity>
    ){}

    async create(createuserseventDto: userEventoDto):Promise<usersEntity>{
        try {
            
            const userscreate: usersEntity = await this.usersEntityDto.save(createuserseventDto);
            return userscreate;
        }
            catch(e){
                throw new Error(e)
            }
    }

    async findAll():Promise<usersEntity[]>{
        try{
            const usersall: usersEntity[]= await this.usersEntityDto.find();
            if(usersall.length ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'No existen usuarios registradas'
                });

            }
            return usersall
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }

    async update(id:string, updateusersdto: UpdateUserEventoDto):Promise<UpdateResult| undefined>{
        try{
            const updateusers: UpdateResult= await this.usersEntityDto.update(id,updateusersdto);
            if(updateusers.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                    message:'El usuario  no se pudo actualizar',
                });
            }
            return updateusers;
        }catch(e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
    async remove(id:string):Promise<DeleteResult | undefined>{
        try{
            const deleteuser: DeleteResult = await this.usersEntityDto.delete(id);
            if(deleteuser.affected ===0){
                throw new ErrorManager({
                    type:'BAD_REQUEST',
                        message:'El ususario  no se pudo eliminar',

                })
            }
            return deleteuser;
        }catch (e){
            throw ErrorManager.createSignatureError(e.message)
        }
    }
}
