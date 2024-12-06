import { ReviewsModule } from './../reviews/reviews.module';
import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
//import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository, UpdateOneModel } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';
import { updateBootcampDto } from './dto/update-bootcamp.dto';


@Injectable()
export class BootcampsService {

  constructor(@InjectRepository (Bootcamp)
    private BootcampRepository:Repository <Bootcamp>){}
    

  create(createBootcampDto: CreateBootcampDto) {
    //Crear la instancia del objeto a guardar
    const nuevoBootcamps = this.BootcampRepository.create(createBootcampDto);
    return this.BootcampRepository.save(nuevoBootcamps)
  }

  findAll() {
    return this.BootcampRepository.find();
  }

  findOne(id: number) {
    return this.BootcampRepository.findOneBy({id : id});
  }

  async update(id: number, updateBootcampDto: updateBootcampDto) {
   //Selecionar el bootcamp cuyo id sea el del paramentro id
    const updBootcamp =  await this.BootcampRepository.findOneBy({id})
    //fusionar los cambios por el bootcamp hallado
    await this.BootcampRepository.merge(updBootcamp, updateBootcampDto)
    //Grabar cambios en base de datos
    await this.BootcampRepository.save(updBootcamp)
    return updBootcamp 
  }

 async remove(id: number) {
    const delBootcamp = await this.BootcampRepository.findOneBy({id});
    await this.BootcampRepository.delete(delBootcamp)
  }
}
