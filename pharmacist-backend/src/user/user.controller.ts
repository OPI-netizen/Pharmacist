import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  BadRequestException,
  Get,
  Delete,
  Put,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
  UploadedFile,
  Param,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from 'src/auth/auth.dto';
import { UserEntity } from './user.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterError, diskStorage } from 'multer';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('test')
  async test() {
    console.log('test')
    return 'test'
  }

  @Post('register')
  // @HttpCode(HttpStatus.CREATED)
  async register(@Body() userData) {
    console.log(userData);
    // Validate input data
    const { email, password } = userData;
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }

    // Check if user already exists
    const existingUser = await this.userService.findByEmail(email);

    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    // Create new user
    const newUser = await this.userService.create(userData as UserEntity);
    return newUser;
  }

  @Get('get-user-by-email')
  async getUserByEmail(email) {
    const user = await this.userService.findByEmail(email);
    return user;
  }

  @Delete('delete-profile')
  async deleteUser(email) {
    const user = await this.userService.deleteUser(email);
    return user;
  }

  @Delete('delete-medicine/:id')
  async deleteMedicine(@Param('id') id: number) {
    const user = await this.userService.deleteMedicine(id);
    return user;
  }

  
  @Put('update-profile')
  async updateUser(@Body() userData: any) {
    console.log(userData, '62');
    const user = await this.userService.updateUser(userData.email, userData);
    return user
  }

  @Post('add-medicine')
  @UseInterceptors(
    FileInterceptor('myfile', {
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
          cb(null, true);
        else {
          cb(new MulterError('LIMIT_UNEXPECTED_FILE', 'image'), false);
        }
      },
      limits: { fileSize: 3000000 },
      storage: diskStorage({
        destination: './upload',
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname)
        },
      })
    }
    ))
  @UsePipes(new ValidationPipe)
  async addMedicine(
    @Body() myobj,
    @UploadedFile() myfile: Express.Multer.File,
  ) {
    myobj.filename = myfile.filename;
    return this.userService.addMedicine(myobj);
  }

  @Get('get-all-medicines')
  async getAllMedicines() {
    return await this.userService.getAllMedicines()
  }

  @Get('get-medicine-by-id/:id')
  async getMedicineByID(@Param('id') id: number) {
    return await this.userService.getMedicineById(id)
  }

  @Get('/getimage/:name')
  getImages(@Param('name') name: string, @Res() res) {
    res.sendFile(name, { root: './upload' })
  }
}

