/// <reference types="multer" />
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    test(): Promise<string>;
    register(userData: any): Promise<UserEntity>;
    getUserByEmail(email: any): Promise<UserEntity>;
    deleteUser(email: any): Promise<void>;
    deleteMedicine(id: number): Promise<void>;
    updateUser(userData: any): Promise<import("typeorm").UpdateResult>;
    addMedicine(myobj: any, myfile: Express.Multer.File): Promise<any>;
    getAllMedicines(): Promise<import("./medicine.entity").MedicineEntity[]>;
    getMedicineByID(id: number): Promise<import("./medicine.entity").MedicineEntity>;
    getImages(name: string, res: any): void;
}
