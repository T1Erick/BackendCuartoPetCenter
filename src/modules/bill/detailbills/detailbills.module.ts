import { Module } from '@nestjs/common';
import { DetailbillsController } from './detailbills.controller';
import { DetailbillsService } from './detailbills.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { detailbillsEntity } from './entities/detailbills.entity';

@Module({
  imports:[TypeOrmModule.forFeature([detailbillsEntity])],
  controllers: [DetailbillsController],
  providers: [DetailbillsService],
})
export class DetailModule {}
