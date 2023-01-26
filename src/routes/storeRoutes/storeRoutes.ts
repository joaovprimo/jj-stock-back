import { Router } from "express";
import { loginStore, signUpStore } from "../../controllers/StoreControllers/StoreContollers.js";
import { signUpMiddleware } from "../../middleware/storeMiddleware/storeMiddleware.js";

const storeRoute = Router();

storeRoute.post('/signup', signUpMiddleware ,signUpStore);
storeRoute.post('/login', loginStore );


export default storeRoute;
