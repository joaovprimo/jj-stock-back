import { Router } from "express";
import userRoute from "./userRoutes/userRoutes.js";

const Routes = Router();

Routes.use("/user", userRoute );

export default Routes;