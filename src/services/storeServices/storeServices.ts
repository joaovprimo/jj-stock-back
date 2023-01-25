import bcrypt from 'bcrypt';
import { findStore, createStore  } from '../../repositories/stroreRepository/storeRepository.js';
import { badRequestError } from '../../errors/bad-request-error.js';

async function signUpService ( name: string, password: string, email: string, cnpj: string ){
  const hashpassword = bcrypt.hashSync(password, 12);
  const store = await findStore(cnpj);
  if(store){
    throw badRequestError();
  }
  const user = await createStore({
    name,
    email,
    password: hashpassword,
    cnpj,
  });
  return user;
}

export { signUpService };