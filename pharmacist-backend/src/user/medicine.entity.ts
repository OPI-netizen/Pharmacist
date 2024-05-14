// user.entity.ts
import { OtpEntity } from 'src/pharmacist/pharmacist.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('medicine')
export class MedicineEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string

  @Column()
  price: number

  @Column()
  filename: string

  @Column()
  description: string

}
