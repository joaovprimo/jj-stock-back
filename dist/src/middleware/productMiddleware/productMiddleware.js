import { productSchema } from "../../schemas/productSchema/productSchema.js";
function productMiddleware(req, res, next) {
    let { name, numberRef, size, provider, description, minimun, color } = req.body;
    const validation = productSchema.validate({
        name, numberRef, size, provider, description, minimun, color
    }, { abortEarly: false });
    if (validation.error) {
        const errors = validation.error.details.map(det => det.message);
        console.log(errors);
        return res.status(400).send(errors);
    }
    ;
    res.locals.product = { name, numberRef, size, provider, description, minimun, color };
    next();
}
;
export { productMiddleware };
//# sourceMappingURL=productMiddleware.js.map