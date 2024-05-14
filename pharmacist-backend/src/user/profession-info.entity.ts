import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('professional-info')
export class ProfessionalInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string

  @Column()
  years_of_experience: number;

  @Column()
  specialization: string;

  @Column()
  workplace: string;


}
