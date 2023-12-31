import { PrimaryGeneratedColumn, Entity, Column, OneToMany, } from "typeorm";

import { usersEntity } from "../../user/entities/users.entity";

@Entity('rol')
export class rolEntity {
    
    @PrimaryGeneratedColumn('uuid')  //uuid es para indicar que el id es el primarykey
    id: string;


    @OneToMany(() => usersEntity, user=> user.rol)
    users: usersEntity[]; //atributo de tipo arreglo


    @Column('varchar', {
        name: 'namerol',
        nullable: false,
        comment: 'Nombre de la seccion',

    })
    namerol: string;

}