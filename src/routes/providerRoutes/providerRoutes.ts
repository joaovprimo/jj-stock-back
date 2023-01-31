import { Router } from "express";
import { getProviders, getProvidersbyName, postProvider, deleteProvider } from "../../controllers/providerControlles/providerControllers.js";
import { providerMiddleware } from "../../middleware/providerMiddleware/providerMiddleware.js";

const providerRoute = Router();

providerRoute.get("/:storesId", getProviders);
providerRoute.get("/findone", getProvidersbyName);
providerRoute.post("/", providerMiddleware ,postProvider);
providerRoute.delete("/:id", deleteProvider);

export default providerRoute;
