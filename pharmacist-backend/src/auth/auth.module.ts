// // otp.module.ts
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserEntity } from 'src/user/user.entity';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';

// @Module({
//   imports: [TypeOrmModule.forFeature([UserEntity])],
//   controllers: [AuthController],
//   providers: [AuthService], // Provide EmailService
// })
// export class AuthModule {}
