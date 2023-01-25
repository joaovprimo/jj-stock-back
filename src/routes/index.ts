import { Router } from "express";
import storeRoute from "./storeRoutes/storeRoutes.js";

const Routes = Router();

Routes.use("/store", storeRoute );

export default Routes;