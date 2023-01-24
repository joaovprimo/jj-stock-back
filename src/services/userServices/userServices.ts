import bcrypt from 'bcrypt';
import  { createUser }  from '../../repositories/userRepository/userRepository.js';
import { findStore } from '../../repositories/stroreRepository/storeRepository.js';
import { notFoundError } from '../../errors/not-foud-error.js';

async function signUpService ( name: string, password: string, email: string, storesId: number ){
  password = bcrypt.hashSync(password, 12);
  const store = await findStore(storesId);
  if(!store){
    throw notFoundError();
  }
  const user = await createUser({
    name,
    email,
    password,
    storesId,
  });
  return user; 
}

export { signUpService };