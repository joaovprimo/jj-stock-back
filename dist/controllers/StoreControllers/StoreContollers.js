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
exports.signUpStore = exports.loginStore = void 0;
const storeServices_js_1 = require("../../services/storeServices/storeServices.js");
const http_status_1 = __importDefault(require("http-status"));
function loginStore(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
    });
}
exports.loginStore = loginStore;
;
function signUpStore(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, password, email, cnpj } = res.locals.singUp;
        try {
            yield (0, storeServices_js_1.signUpService)(name, password, email, cnpj);
            return res.sendStatus(http_status_1.default.CREATED);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(http_status_1.default.NOT_FOUND);
            }
            return res.sendStatus(http_status_1.default.BAD_REQUEST);
        }
    });
}
exports.signUpStore = signUpStore;
//# sourceMappingURL=StoreContollers.js.map