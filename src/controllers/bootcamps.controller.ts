import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('bootcamps')
export class BootcampsController {
//EndPoints Get:

    @Get()
    getAllBootcamps():String{
        return "Aqui se van a mostrar todo los bootcamps"
    }


    @Get(":id")
    getBootcamps(@Param ("id") id:number ):string{
        return `Aqui se va a mostrar el bootcamp cuyo id es: ${id}`
    }

    @Post()
    createBootcamp():string{
        return "Aqui se va a guardar un nuevo bootcamp"
    }

}
