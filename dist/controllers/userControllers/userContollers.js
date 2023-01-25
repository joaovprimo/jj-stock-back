import { signUpService } from '../../services/userServices/userServices.js';
import httpStatus from "http-status";
async function loginUser(req, res) {
}
;
async function signUpUser(req, res) {
    const { name, password, email, storesId } = res.locals.singUp;
    try {
        await signUpService(name, password, email, storesId);
        return res.sendStatus(httpStatus.CREATED);
    }
    catch (error) {
        if (error.name === "NotFoundError") {
            return res.sendStatus(httpStatus.NOT_FOUND);
        }
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}
export { loginUser, signUpUser };
//# sourceMappingURL=userContollers.js.map