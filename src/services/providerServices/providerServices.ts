import providersRepositories from "../../repositories/providerRepository/providerRepository.js";
import { notFoundError } from "../../errors/not-foud-error.js";

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

const providerServices = {
    getProvidersServices,
    getProvidersServicesbyName,
    getProvidersServicesbyCnpj
};

export default providerServices;

