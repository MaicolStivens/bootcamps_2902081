import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Bootcamp } from "src/bootcamps/entities/bootcamp.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, PrimaryGeneratedColumn , OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number

    @Column ({type: "varchar", nullable: false})
    title: string

    @Column ({type: "text", nullable: false})
    comment: string


    @Column ({  type: "text", nullable: false})
    descripcion : string

    @Column ({type: "tinyint", nullable: false, default: 4 })
    weeks: number




    @ManyToOne(()=> Bootcamp, (bootcamp: Bootcamp)=> bootcamp.vista)
    bootcamp: Bootcamp

    @ManyToOne(()=> User, (user: User)=> user.vista)
    user: User

}
