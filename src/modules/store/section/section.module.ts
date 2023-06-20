import { Module } from '@nestjs/common';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';
import { sectionEntity } from './entities/section.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([sectionEntity])],
  providers: [SectionService],
  controllers: [SectionController],
})
export class SectionModule {}
