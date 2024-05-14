import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { MedicineEntity } from './medicine.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(MedicineEntity)
    private readonly medicineRepo: Repository<MedicineEntity>,
  ) {}

  async findByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { email } });
  }

  async getAllMedicines() {
    return this.medicineRepo.find()
  }

  async getMedicineById(id: number): Promise<MedicineEntity> {
    return this.medicineRepo.findOne({ where: { id } });
  }
  

  async create(user: UserEntity): Promise<UserEntity> {
    return this.userRepository.save(user);
  }

  async deleteUser(email: string): Promise<void> {
    // Find the user by email
    const user = await this.findByEmail(email);
    if (user) {
      // Delete the user
      await this.userRepository.delete(user.id);
    } else {
      throw new Error('User not found');
    }
  }
  
  async deleteMedicine(id) {
    // Find the user by email
    const user = await this.medicineRepo.findOne({ where: { id } });

    if (user) {
      // Delete the user
      await this.medicineRepo.delete(user.id);
    } else {
      throw new Error('medicine not found');
    }
  }

  async updateUser(email, userData){
    const user = await this.findByEmail(email);
    if (user) {
      // Update the user
      const updatedUser = await this.userRepository.update(user.id, userData);
      return updatedUser
    } else {
      throw new Error('User not found');
    }
  }

  async addMedicine(medicinedata){
    return this.medicineRepo.save(medicinedata);
  }

  // async getUserByEmail(email){
  //   return this.userRepository.findOne({ email: email });
  // }
}
