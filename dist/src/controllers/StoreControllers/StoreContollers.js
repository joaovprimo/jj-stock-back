var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import functionsServiceStore from '../../services/storeServices/storeServices.js';
import httpStatus from "http-status";
function loginStore(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { cnpj, password } = req.body;
        try {
            const login = yield functionsServiceStore.loginStore(cnpj, password);
            return res.status(httpStatus.OK).send(login);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
;
function signUpStore(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, password, email, cnpj } = res.locals.singUp;
        try {
            yield functionsServiceStore.signUpService(name, password, email, cnpj);
            return res.sendStatus(httpStatus.CREATED);
        }
        catch (error) {
            if (error.name === "NotFoundError") {
                return res.sendStatus(httpStatus.NOT_FOUND);
            }
            return res.sendStatus(httpStatus.BAD_REQUEST);
        }
    });
}
export { loginStore, signUpStore };
//# sourceMappingURL=StoreContollers.js.map