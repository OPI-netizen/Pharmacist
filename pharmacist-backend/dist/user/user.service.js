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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const medicine_entity_1 = require("./medicine.entity");
let UserService = exports.UserService = class UserService {
    constructor(userRepository, medicineRepo) {
        this.userRepository = userRepository;
        this.medicineRepo = medicineRepo;
    }
    async findByEmail(email) {
        return this.userRepository.findOne({ where: { email } });
    }
    async getAllMedicines() {
        return this.medicineRepo.find();
    }
    async getMedicineById(id) {
        return this.medicineRepo.findOne({ where: { id } });
    }
    async create(user) {
        return this.userRepository.save(user);
    }
    async deleteUser(email) {
        const user = await this.findByEmail(email);
        if (user) {
            await this.userRepository.delete(user.id);
        }
        else {
            throw new Error('User not found');
        }
    }
    async deleteMedicine(id) {
        const user = await this.medicineRepo.findOne({ where: { id } });
        if (user) {
            await this.medicineRepo.delete(user.id);
        }
        else {
            throw new Error('medicine not found');
        }
    }
    async updateUser(email, userData) {
        const user = await this.findByEmail(email);
        if (user) {
            const updatedUser = await this.userRepository.update(user.id, userData);
            return updatedUser;
        }
        else {
            throw new Error('User not found');
        }
    }
    async addMedicine(medicinedata) {
        return this.medicineRepo.save(medicinedata);
    }
};
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UserEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(medicine_entity_1.MedicineEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map