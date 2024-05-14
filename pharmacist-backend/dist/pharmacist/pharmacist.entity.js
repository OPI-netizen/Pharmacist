"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrescriptionEntity = exports.DoctorEntity = exports.OtpEntity = exports.pharmacistEntity = void 0;
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
let pharmacistEntity = exports.pharmacistEntity = class pharmacistEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], pharmacistEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], pharmacistEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], pharmacistEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], pharmacistEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], pharmacistEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], pharmacistEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], pharmacistEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.UserEntity)
], pharmacistEntity.prototype, "user", void 0);
exports.pharmacistEntity = pharmacistEntity = __decorate([
    (0, typeorm_1.Entity)('pharmacist')
], pharmacistEntity);
let OtpEntity = exports.OtpEntity = class OtpEntity {
    setExpirationDate(expirationInMinutes = 5) {
        const currentTime = new Date();
        this.expiration_date = new Date(currentTime.getTime() + expirationInMinutes * 60000);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OtpEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OtpEntity.prototype, "otp", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], OtpEntity.prototype, "expiration_date", void 0);
exports.OtpEntity = OtpEntity = __decorate([
    (0, typeorm_1.Entity)('otp')
], OtpEntity);
let DoctorEntity = exports.DoctorEntity = class DoctorEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DoctorEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "specialization", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "degree", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], DoctorEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.UserEntity)
], DoctorEntity.prototype, "user", void 0);
exports.DoctorEntity = DoctorEntity = __decorate([
    (0, typeorm_1.Entity)('doctor')
], DoctorEntity);
let PrescriptionEntity = exports.PrescriptionEntity = class PrescriptionEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PrescriptionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "appointment_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "appointment_time", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "disease", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "responseTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "scheduledTime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PrescriptionEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.id),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], PrescriptionEntity.prototype, "patient", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pharmacistEntity, (pharmacist) => pharmacist.id),
    (0, typeorm_1.JoinColumn)({ name: 'pharmacist_id' }),
    __metadata("design:type", pharmacistEntity)
], PrescriptionEntity.prototype, "pharmacist", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DoctorEntity, (doctor) => doctor.id),
    (0, typeorm_1.JoinColumn)({ name: 'doctor_id' }),
    __metadata("design:type", DoctorEntity)
], PrescriptionEntity.prototype, "doctor", void 0);
exports.PrescriptionEntity = PrescriptionEntity = __decorate([
    (0, typeorm_1.Entity)('prescription')
], PrescriptionEntity);
//# sourceMappingURL=pharmacist.entity.js.map