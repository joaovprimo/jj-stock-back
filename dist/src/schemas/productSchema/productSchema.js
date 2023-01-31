import Joi from "joi";
export const productSchema = Joi.object({
    name: Joi.string().required(),
    numberRef: Joi.number().required(),
    sizeId: Joi.number().required(),
    providerId: Joi.number().required(),
    fiscalNoteId: Joi.number().required(),
    stockId: Joi.number().required(),
    quantity: Joi.number().required(),
    description: Joi.string(),
    minimun: Joi.number().required(),
    color: Joi.string(),
});
//# sourceMappingURL=productSchema.js.map