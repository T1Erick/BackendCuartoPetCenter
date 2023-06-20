import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usersEntity } from './entities/users.entity';

@Module({
  imports:[TypeOrmModule.forFeature([usersEntity])],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
