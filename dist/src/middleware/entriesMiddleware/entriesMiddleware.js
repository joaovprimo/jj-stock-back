import { entriesSchema } from "../../schemas/entriesSchema/entriesSchema.js";
function entriesMiddleware(req, res, next) {
    let { name, quantity, fiscalNote, provider, receiveDate, size } = req.body;
    const validation = entriesSchema.validate({
        name,
        quantity,
        fiscalNote,
        provider,
        receiveDate,
        size
    }, { abortEarly: false });
    if (validation.error) {
        const errors = validation.error.details.map(det => det.message);
        return res.status(400).send(errors);
    }
    ;
    res.locals.entries = { name, quantity, fiscalNote, provider, receiveDate, size };
    next();
}
;
export { entriesMiddleware };
//# sourceMappingURL=entriesMiddleware.js.map