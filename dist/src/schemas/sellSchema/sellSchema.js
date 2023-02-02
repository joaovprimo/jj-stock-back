import Joi from "joi";
export const sellSchema = Joi.object({
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    sellDate: Joi.string().required(),
    size: Joi.string().required(),
    value: Joi.string().required()
});
//# sourceMappingURL=sellSchema.js.map