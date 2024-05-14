import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { MedicineEntity } from './medicine.entity';
export declare class UserService {
    private readonly userRepository;
    private readonly medicineRepo;
    constructor(userRepository: Repository<UserEntity>, medicineRepo: Repository<MedicineEntity>);
    findByEmail(email: string): Promise<UserEntity>;
    getAllMedicines(): Promise<MedicineEntity[]>;
    getMedicineById(id: number): Promise<MedicineEntity>;
    create(user: UserEntity): Promise<UserEntity>;
    deleteUser(email: string): Promise<void>;
    deleteMedicine(id: any): Promise<void>;
    updateUser(email: any, userData: any): Promise<import("typeorm").UpdateResult>;
    addMedicine(medicinedata: any): Promise<any>;
}
