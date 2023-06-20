import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categoryEntity } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './repositories/categoria.repository';

@Module({
  imports:[TypeOrmModule.forFeature([categoryEntity,CategoryRepository])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule {}
