import { Router } from "express";
import { loginUser, signUpUser } from "../../controllers/userControllers/userContollers.js";
import { signUpMiddleware } from "../../middleware/userMiddleware/userMiddleware.js";
const userRoute = Router();
userRoute.post('/signup', signUpMiddleware, signUpUser);
userRoute.get('/login', loginUser);
export default userRoute;
//# sourceMappingURL=userRoutes.js.map