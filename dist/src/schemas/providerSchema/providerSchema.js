import Joi from "joi";
export const providerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    cnpj: Joi.string().required()
});
//# sourceMappingURL=providerSchema.js.map