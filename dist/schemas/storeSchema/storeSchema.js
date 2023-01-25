"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.storeSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(6).required(),
    cnpj: joi_1.default.number().required()
});
//# sourceMappingURL=storeSchema.js.map