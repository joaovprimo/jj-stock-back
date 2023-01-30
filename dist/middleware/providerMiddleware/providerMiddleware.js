import { providerSchema } from "../../schemas/providerSchema/providerSchema.js";
function providerMiddleware(req, res, next) {
    let { name, email, cnpj } = req.body;
    const validation = providerSchema.validate({
        name,
        email,
        cnpj
    }, { abortEarly: false });
    if (validation.error) {
        const errors = validation.error.details.map(det => det.message);
        return res.status(400).send(errors);
    }
    ;
    res.locals.provider = { name, email, cnpj };
    next();
}
;
export { providerMiddleware };
//# sourceMappingURL=providerMiddleware.js.map