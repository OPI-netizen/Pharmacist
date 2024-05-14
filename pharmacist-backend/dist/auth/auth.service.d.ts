import { UserEntity } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    validateUser(email: string, password: string): Promise<UserEntity>;
}
