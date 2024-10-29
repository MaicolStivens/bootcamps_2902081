import {Entity , Column , PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Bootcamp {
     @PrimaryGeneratedColumn()
     id:number

     @Column()
     phone: number

     
     @Column()
     name: String

     @Column( {name : 'average_rating'} )
     averageRating: number
}
