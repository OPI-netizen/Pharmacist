import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<import("../user/user.entity").UserEntity | {
        message: string;
    }>;
}
