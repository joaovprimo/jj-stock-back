import { Router } from "express";
import { loginUser, signUpUser } from "../../controllers/userControllers/userContollers.js";

const userRoute = Router();

userRoute.get('/login', loginUser );
userRoute.post('/signup', signUpUser)

export default userRoute;
