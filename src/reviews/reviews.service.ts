import { Review } from './entities/review.entity';
import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Repository, UpdateOneModel } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class ReviewsService {

  constructor(@InjectRepository (Review)
  private ReviewRepository:Repository <Review>){}

 create(createReviewDto: CreateReviewDto) {
    //Crear la instancia del objeto a guardar
    const nuevoReview = this.ReviewRepository.create(createReviewDto);
    return this.ReviewRepository.save(nuevoReview)
  }


  findAll() {
    return this.ReviewRepository.find();
  }

  findOne(id: number) {
    return this.ReviewRepository.findOneBy({id : id});
  }

  async update(id: number, UpdateReviewDto: UpdateReviewDto) {
    //Selecionar el bootcamp cuyo id sea el del paramentro id
     const updReview =  await this.ReviewRepository.findOneBy({id})
     //fusionar los cambios por el bootcamp hallado
     await this.ReviewRepository.merge(updReview, UpdateReviewDto)
     //Grabar cambios en base de datos
     await this.ReviewRepository.save(updReview)
     return updReview 
   }

   async remove(id: number) {
    const delReview = await this.ReviewRepository.findOneBy({id});
    await this.ReviewRepository.delete(delReview)  }
}
 