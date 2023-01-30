import Joi from "joi";
export const storeSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    cnpj: Joi.string().required()
});
//# sourceMappingURL=storeSchema.js.map