import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConstants } from '../jwt.constants';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { UserService } from 'src/modules/users/user/user.service';
import { usersEntity } from 'src/modules/users/user/entities/users.entity';



@Module({
    imports: [TypeOrmModule.forFeature([usersEntity]),
    JwtModule.register({
      secret:jwtConstants.secret,
      signOptions: {expiresIn:'1h'},
    }),

    ],
      controllers: [LoginController],
      providers: [LoginService,UserService],
      exports: [LoginService]
     
    })


export class LoginModule {
    


}
