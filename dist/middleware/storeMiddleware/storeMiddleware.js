"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpMiddleware = void 0;
const storeSchema_js_1 = require("../../schemas/storeSchema/storeSchema.js");
function signUpMiddleware(req, res, next) {
    let { name, email, password, cnpj } = req.body;
    const validation = storeSchema_js_1.storeSchema.validate({
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
exports.signUpMiddleware = signUpMiddleware;
;
//# sourceMappingURL=storeMiddleware.js.map