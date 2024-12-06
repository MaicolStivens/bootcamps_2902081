import { Bootcamp } from './../../bootcamps/entities/bootcamp.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsEnum, IsNotEmpty } from "class-validator";

// Enum con valores específicos para `minimumSkill`
enum minimumSkill {
    "Beginner" = "Beginner",
    "Intermediate" = "Intermediate",
    "Advanced" = "Advanced"
}

@Entity()
export class CreateCourseDto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: false })
    title: string;

    @Column({ type: "text", nullable: false })
    descripcion: string;

    @Column({ type: "tinyint", nullable: false, default: 4 })
    weeks: number;

    @Column({ type: "double", nullable: false })
    tuition: number;

    // Validación para `minimumSkill`
    @IsEnum(minimumSkill, { message: "El valor de minimumSkill debe ser 'Beginner', 'Intermediate' o 'Advanced'" })
    @IsNotEmpty({ message: "minimumSkill es obligatorio" })
    @Column({ name: "minimum_Skill", type: "enum", enum: minimumSkill })
    minimumSkill: minimumSkill;

    @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP', name: "created_at" })
    createdAt: Date;

    // Relación con Bootcamp
    @ManyToOne(() => Bootcamp, (bootcamp: Bootcamp) => bootcamp.cursos)
    bootcamp: Bootcamp;
}
