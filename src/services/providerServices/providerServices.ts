import providersRepositories from "../../repositories/providerRepository/providerRepository.js";
import { notFoundError, } from "../../errors/not-foud-error.js";
import { badRequestError } from "../../errors/bad-request-error.js";

async function getProvidersServices(){
    const providers = await providersRepositories.findProviders();
    if(!providers) throw notFoundError();
    return providers;
};

async function getProvidersServicesbyName(name:string){
    const provider = await providersRepositories.findProviderbyName( name );
    if(!provider) throw notFoundError();
    return provider;
}

async function getProvidersServicesbyCnpj(cnpj:string){
    const provider = await providersRepositories.findProviderbyCnpj( cnpj );
    if(!provider) throw notFoundError();
    return provider;
}

async function createProvider(name:string, cnpj:string, email:string) {
    const provider = await providersRepositories.create({ name, cnpj, email });
    if(!provider) throw badRequestError();
    return provider;
}

async function deleteProvider(id:number){
    const provider = await providersRepositories.deleteProv(id);
    if(!provider) throw badRequestError();
    return provider;
}

const providerServices = {
    getProvidersServices,
    getProvidersServicesbyName,
    getProvidersServicesbyCnpj,
    createProvider,
    deleteProvider
};

export default providerServices;

