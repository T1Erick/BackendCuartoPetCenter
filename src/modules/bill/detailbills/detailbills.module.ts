import { Module } from '@nestjs/common';
import { DetailbillsController } from './detailbills.controller';
import { DetailbillsService } from './detailbills.service';

@Module({
  controllers: [DetailbillsController],
  providers: [DetailbillsService],
})
export class DetailModule {}
