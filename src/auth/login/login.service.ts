import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { usersEntity } from 'src/modules/users/user/entities/users.entity';
import { UserService } from 'src/modules/users/user/user.service';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { jwtConstants } from '../jwt.constants';
import { PayLoadToken } from './interfaces/login.interface';

@Injectable()

export class LoginService {
    constructor(@InjectRepository(usersEntity) private usersEntityDto: Repository<usersEntity>, private readonly userService: UserService ){}


    public async validateUser(email: string, password: string):Promise<usersEntity| null> {
        const userByEmail = await this.userService.findBy({
          key: 'email',
          value: email
        });
        if (userByEmail) {
            const match = await bcrypt.compare(password, userByEmail.password)
            if (match) return userByEmail;
          }
          return null;
}

public signJWT({ 
    payload,
    secret,
    expires, 
    }: { 
      payload: jwt.JwtPayload;
       secret: string; 
       expires: number | string;
       }) {
        return jwt.sign(payload, secret, { expiresIn: expires });
       }


       public async generateJWT(user: usersEntity):Promise<any>{
        const getUser = await this.userService.findOne(user.id);
        const payload: PayLoadToken = {
          sub: getUser.id,
          role: getUser.rol,
          name:getUser.name
        }
        return {
          accessToke: this.signJWT({
            payload,
            secret: jwtConstants.secret,
            expires: '1h',
            
          }),
          user,
        }
       }
}
