import { Module } from '@nestjs/common';
import { DetailpublicationController } from './detailpublication.controller';
import { DetailpublicationService } from './detailpublication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { detailpublicationsEntity } from './entities/detailpublication.entity';

@Module({
  imports:[TypeOrmModule.forFeature([detailpublicationsEntity])],
  controllers: [DetailpublicationController],
  providers: [DetailpublicationService]
})
export class DetailpublicationModule {}
