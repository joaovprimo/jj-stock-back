import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import functionRepositoryStore from '../../repositories/stroreRepository/storeRepository.js';
import functionsRepositorySession from '../../repositories/sessionRepository/sessionRepository.js';
import { badRequestError } from '../../errors/bad-request-error.js';
import { invalidCredentialsError } from '../../errors/invalid-credentials-error.js';

async function signUpService ( name: string, password: string, email: string, cnpj: string ){
  const hashpassword = bcrypt.hashSync( password, 12 );
  const store = await functionRepositoryStore.findStore( cnpj );
  if(store){
    throw badRequestError();
  }
  const user = await functionRepositoryStore.createStore({
    name,
    email,
    password: hashpassword,
    cnpj,
  });
  return user;
}

async function loginStore ( cnpj: string, password: string ) {
  const store = await functionRepositoryStore.findStore(cnpj);
  const passStore = store.password;
  const storeId = store.id;
  await verifyPassword( password, passStore );
  const session = await functionsRepositorySession.findSession(storeId);
  if(session){
    await functionsRepositorySession.deleteSession(session.id);
  }
  const token = await createSession( storeId );

  return {
    store: store.name, 
    token,
  }
}

async function verifyPassword ( password:string, passStore:string ){
const isValidPass = await bcrypt.compare( password, passStore );
if(!isValidPass) throw invalidCredentialsError();
}

async function createSession ( storeId:number ){
  const token = uuid();
  const data = {
    token,
    storesId: storeId
  };
  await functionsRepositorySession.createSession( data );
  return token;
}



const functionsServiceStore = {
  signUpService, 
  loginStore
}

export default functionsServiceStore;