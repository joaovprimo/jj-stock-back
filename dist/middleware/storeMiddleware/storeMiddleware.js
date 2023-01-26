import { storeSchema } from "../../schemas/storeSchema/storeSchema.js";
function signUpMiddleware(req, res, next) {
    let { name, email, password, cnpj } = req.body;
    const validation = storeSchema.validate({
        name,
        password,
        email,
        cnpj
    }, { abortEarly: false });
    if (validation.error) {
        const errors = validation.error.details.map(det => det.message);
        return res.status(400).send(errors);
    }
    ;
    res.locals.singUp = { name, email, password, cnpj };
    next();
}
;
export { signUpMiddleware };
//# sourceMappingURL=storeMiddleware.js.map