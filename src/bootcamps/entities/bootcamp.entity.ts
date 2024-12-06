import { Course } from "src/courses/entities/course.entity"
import { Review } from "src/reviews/entities/review.entity"
import { User } from "src/users/entities/user.entity"
import {Entity , Column , PrimaryGeneratedColumn, OneToMany, ManyToOne} from "typeorm"

@Entity()
export class Bootcamp {
     @PrimaryGeneratedColumn()
     id:number

     @Column( {type: "integer",
          nullable: true
 } )
     phone: number

     
     @Column({
          type: "varchar",
          length: 100,
          nullable: false
     })
     name: String

     @Column( {name : 'average_rating'} )
     averageRating: number


     @Column ({type: "varchar", nullable: false})
     address: string;

     @Column ({type: "varchar"})
     topics : string;


     @Column ({type: "timestamp" , default: ()=> 'CURRENT_TIMESTAMP', name: "created_at"})
     createdAt: Date;


     //Los cursos de un bootcamps
     @OneToMany(()=> Course, (curso: Course)=> curso.bootcamp)
     cursos: Course[]
     @OneToMany(()=> Review, (vista: Review)=> vista.bootcamp)
     vista: Review[]
     @ManyToOne(()=> User, (usuario: User)=> usuario.bootcamp)
     user: User[]
}

