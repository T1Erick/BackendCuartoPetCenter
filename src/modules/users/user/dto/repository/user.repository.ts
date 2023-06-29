import { EntityRepository, Repository } from "typeorm";
import { usersEntity } from "../../entities/users.entity";


@EntityRepository(usersEntity)
export class UserRepository extends Repository<usersEntity>{

}