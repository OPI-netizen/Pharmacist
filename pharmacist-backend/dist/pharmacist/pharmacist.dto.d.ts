import { DoctorEntity, pharmacistEntity } from './pharmacist.entity';
import { UserEntity } from 'src/user/user.entity';
export declare class PrescriptionDto {
    id: number;
    appointment_date: string;
    appointment_time: string;
    disease: string;
    responseTime: string;
    scheduledTime: string;
    status: string;
    patient: UserEntity;
    pharmacists: pharmacistEntity;
    doctor: DoctorEntity;
}
