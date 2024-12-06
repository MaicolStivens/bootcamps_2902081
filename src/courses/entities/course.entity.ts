import { Bootcamp } from './../../bootcamps/entities/bootcamp.entity';
import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {

    @Column ({ type: "varchar", nullable: false})
    title: string

    @Column ({  type: "text", nullable: false})
    descripcion : string

    @Column ({type: "tinyint", nullable: false, default: 4 })
    weeks: number

    @Column({type: "double", nullable: false})
    tuition: number

    
    @Column({ name: "minimum_Skill", type: "enum", enum: ["Beginner","Intermediate","Advanced"] })
    
    minimumSkill : minimumSkill

    @Column ({type: "timestamp" , default: ()=> 'CURRENT_TIMESTAMP', name: "created_at"})
    createdAt: Date;


    //EL bootcamp al  que pertenece al curso
    //EL inverso de la relacion
    @ManyToOne(()=> Bootcamp , (bootcamp :Bootcamp)=> bootcamp.cursos)
    bootcamp: Bootcamp
    
}

enum minimumSkill{
    "Beginner",
    "Intermediate",
    "Advanced"
}