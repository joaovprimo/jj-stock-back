import { Router } from "express";
import storeRoute from "./storeRoutes/storeRoutes.js";
import providerRoute from "./providerRoutes/providerRoutes.js";
import productsRoute from "./productsRoutes/productsRoutes.js";
import entriesRoute from "./entriesRoute/entriesRoute.js";

const Routes = Router();

Routes.use("/store", storeRoute );
Routes.use("/providers", providerRoute);
Routes.use("/products", productsRoute);
Routes.use("/entry", entriesRoute);

export default Routes;