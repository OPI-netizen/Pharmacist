import { UserEntity } from 'src/user/user.entity';
export declare class pharmacistEntity {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    gender: string;
    image: string;
    user: UserEntity;
}
export declare class OtpEntity {
    id: number;
    otp: string;
    expiration_date: Date;
    setExpirationDate(expirationInMinutes?: number): void;
}
export declare class DoctorEntity {
    id: number;
    name: string;
    specialization: string;
    degree: string;
    experience: string;
    email: string;
    phoneNumber: string;
    image: string;
    user: UserEntity;
}
export declare class PrescriptionEntity {
    id: number;
    appointment_date: string;
    appointment_time: string;
    disease: string;
    responseTime: string;
    scheduledTime: string;
    status: string;
    patient: UserEntity;
    pharmacist: pharmacistEntity;
    doctor: DoctorEntity;
}
