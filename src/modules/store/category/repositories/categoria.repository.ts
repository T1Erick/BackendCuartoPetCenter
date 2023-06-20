import { EntityRepository, Repository } from "typeorm";
import { categoryEntity } from "../entities/category.entity";


@EntityRepository(categoryEntity)
export class CategoryRepository extends Repository<categoryEntity>{

}