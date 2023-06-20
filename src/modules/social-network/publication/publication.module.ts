import { Module } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { PublicationController } from './publication.controller';
import { publicationEntity } from './entities/publication.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([publicationEntity])],
  providers: [PublicationService],
  controllers: [PublicationController]
})
export class PublicationModule {}
