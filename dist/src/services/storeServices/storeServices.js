var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import functionRepositoryStore from '../../repositories/stroreRepository/storeRepository.js';
import functionsRepositorySession from '../../repositories/sessionRepository/sessionRepository.js';
import { badRequestError } from '../../errors/bad-request-error.js';
import { invalidCredentialsError } from '../../errors/invalid-credentials-error.js';
import stockRepositoryObj from "../../repositories/stockRepository/stockRepository.js";
function signUpService(name, password, email, cnpj) {
    return __awaiter(this, void 0, void 0, function* () {
        const hashpassword = bcrypt.hashSync(password, 12);
        const store = yield functionRepositoryStore.findStore(cnpj);
        if (store) {
            throw badRequestError();
        }
        const user = yield functionRepositoryStore.createStore({
            name,
            email,
            password: hashpassword,
            cnpj,
        });
        yield stockRepositoryObj.createStock(user.id);
        return user;
    });
}
function loginStore(cnpj, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const store = yield functionRepositoryStore.findStore(cnpj);
        const passStore = store.password;
        const storeId = store.id;
        const storeName = store.name;
        const storeEmail = store.email;
        const storeCnpj = store.cnpj;
        yield verifyPassword(password, passStore);
        const session = yield functionsRepositorySession.findSession(storeId);
        if (session) {
            yield functionsRepositorySession.deleteSession(session.id);
        }
        const token = yield createSession(storeId);
        return {
            store: {
                name: storeName,
                email: storeEmail,
                cnpj: storeCnpj
            },
            token,
        };
    });
}
function verifyPassword(password, passStore) {
    return __awaiter(this, void 0, void 0, function* () {
        const isValidPass = yield bcrypt.compare(password, passStore);
        if (!isValidPass)
            throw invalidCredentialsError();
    });
}
function createSession(storeId) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = uuid();
        const data = {
            token,
            storesId: storeId
        };
        yield functionsRepositorySession.createSession(data);
        return token;
    });
}
const functionsServiceStore = {
    signUpService,
    loginStore
};
export default functionsServiceStore;
//# sourceMappingURL=storeServices.js.map