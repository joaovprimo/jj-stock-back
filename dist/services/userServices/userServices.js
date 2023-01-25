import bcrypt from 'bcrypt';
import { createUser } from '../../repositories/userRepository/userRepository.js';
import { findStore } from '../../repositories/stroreRepository/storeRepository.js';
import { notFoundError } from '../../errors/not-foud-error.js';
async function signUpService(name, password, email, storesId) {
    const hashpassword = bcrypt.hashSync(password, 12);
    const store = await findStore(storesId);
    console.log(store);
    if (!store) {
        throw notFoundError();
    }
    const user = await createUser({
        name,
        email,
        password: hashpassword,
        storesId,
    });
    return user;
}
export { signUpService };
//# sourceMappingURL=userServices.js.map