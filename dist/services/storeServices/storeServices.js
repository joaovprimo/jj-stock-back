"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const storeRepository_js_1 = require("../../repositories/stroreRepository/storeRepository.js");
const not_foud_error_js_1 = require("../../errors/not-foud-error.js");
function signUpService(name, password, email, cnpj) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashpassword = bcrypt_1.default.hashSync(password, 12);
        const store = yield (0, storeRepository_js_1.findStore)(cnpj);
        console.log(store);
        if (store) {
            throw (0, not_foud_error_js_1.notFoundError)();
        }
        const user = yield (0, storeRepository_js_1.createStore)({
            name,
            email,
            password: hashpassword,
            cnpj,
        });
        return user;
    });
}
exports.signUpService = signUpService;
//# sourceMappingURL=storeServices.js.map