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
exports.PrescriptionDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const pharmacist_entity_1 = require("./pharmacist.entity");
const user_entity_1 = require("../user/user.entity");
class PrescriptionDto {
}
exports.PrescriptionDto = PrescriptionDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], PrescriptionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PrescriptionDto.prototype, "appointment_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PrescriptionDto.prototype, "appointment_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionDto.prototype, "disease", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionDto.prototype, "responseTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ nullable: true }),
    __metadata("design:type", String)
], PrescriptionDto.prototype, "scheduledTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PrescriptionDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => user_entity_1.UserEntity }),
    __metadata("design:type", user_entity_1.UserEntity)
], PrescriptionDto.prototype, "patient", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => pharmacist_entity_1.pharmacistEntity }),
    __metadata("design:type", pharmacist_entity_1.pharmacistEntity)
], PrescriptionDto.prototype, "pharmacists", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => pharmacist_entity_1.DoctorEntity }),
    __metadata("design:type", pharmacist_entity_1.DoctorEntity)
], PrescriptionDto.prototype, "doctor", void 0);
//# sourceMappingURL=pharmacist.dto.js.map