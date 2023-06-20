import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { billEntity } from './entities/bill.entity';

@Module({
  imports:[TypeOrmModule.forFeature([billEntity])],
  providers: [BillsService],
  controllers: [BillsController],
})
export class BillsModule {}
