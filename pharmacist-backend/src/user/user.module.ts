// otp.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { MedicineEntity } from './medicine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, MedicineEntity])],
  controllers: [UserController, AuthController],
  providers: [UserService, AuthService], // Provide EmailService
})
export class UserModule {}
