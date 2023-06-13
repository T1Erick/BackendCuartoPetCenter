import { Module } from '@nestjs/common';
import { DetailpublicationController } from './detailpublication.controller';
import { DetailpublicationService } from './detailpublication.service';

@Module({
  controllers: [DetailpublicationController],
  providers: [DetailpublicationService]
})
export class DetailpublicationModule {}
