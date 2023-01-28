import { Router } from "express";
import storeRoute from "./storeRoutes/storeRoutes.js";
import providerRoute from "./providerRoutes/providerRoutes.js";

const Routes = Router();

Routes.use("/store", storeRoute );
Routes.use("/providers", providerRoute)

export default Routes;