import { userSchema } from "../../schemas/userSchema/userSchema.js";
function signUpMiddleware(req, res, next) {
    let { name, email, password, storesId } = req.body;
    storesId = Number(storesId);
    const validation = userSchema.validate({
        name,
        password,
        email,
        storesId
    }, { abortEarly: false });
    if (validation.error) {
        const errors = validation.error.details.map(det => det.message);
        return res.status(400).send(errors);
    }
    ;
    res.locals.singUp = { name, email, password, storesId };
    next();
}
;
export { signUpMiddleware };
//# sourceMappingURL=userMiddleware.js.map