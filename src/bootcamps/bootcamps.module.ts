import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { BootcampsController } from './bootcamps.controller';
import {Bootcamp} from './entities/bootcamp.entity';
import { Course } from 'src/courses/entities/course.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([Bootcamp, Course])],
  controllers: [BootcampsController],
  providers: [BootcampsService],
})
export class BootcampsModule {}
