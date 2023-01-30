import { Router } from "express";
import storeRoute from "./storeRoutes/storeRoutes.js";
import providerRoute from "./providerRoutes/providerRoutes.js";
import productsRoute from "./productsRoutes/productsRoutes.js";

const Routes = Router();

Routes.use("/store", storeRoute );
Routes.use("/providers", providerRoute);
Routes.use("/products", productsRoute);

export default Routes;