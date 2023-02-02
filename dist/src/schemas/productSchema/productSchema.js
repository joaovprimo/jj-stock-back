import Joi from "joi";
export const productSchema = Joi.object({
    name: Joi.string().required(),
    numberRef: Joi.string().required(),
    size: Joi.string().required(),
    provider: Joi.string().required(),
    description: Joi.string(),
    minimun: Joi.number().required(),
    color: Joi.string(),
});
//# sourceMappingURL=productSchema.js.map