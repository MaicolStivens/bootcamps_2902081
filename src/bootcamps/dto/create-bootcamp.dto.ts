import { IsInt, IsNotEmpty, IsNumber, IsPositive , Min , Max, IsDate} from "class-validator"


export class CreateBootcampDto {
   @IsPositive({message: "Telefono debe ser positivo"})
   @IsNumber()
   @IsNotEmpty({message:"Telefono Obligatorio"})
   readonly phone: number

   @IsNotEmpty({message:"Nombre Obligatorio"})
   readonly name : string

   @Min(1)
   @Max(10)
   readonly averageRating : number

   @IsNotEmpty()
   readonly address : string
   
   readonly topics : string

   @IsDate({ message: "Fecha debe ser válida" })
   @IsNotEmpty({ message: "Fecha Obligatoria" }) 
   readonly createdAt : Date 

}
