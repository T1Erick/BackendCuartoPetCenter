import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { rolEntity } from './entities/rol.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([rolEntity])],
  providers: [RolService],
  controllers: [RolController]
})
export class RolModule {}
