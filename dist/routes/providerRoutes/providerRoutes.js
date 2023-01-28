import { Router } from "express";
import { getProviders, getProvidersbyName } from "../../controllers/providerControlles/providerControllers.js";
const providerRoute = Router();
providerRoute.get("/", getProviders);
providerRoute.get("/findone", getProvidersbyName);
export default providerRoute;
//# sourceMappingURL=providerRoutes.js.map