import Joi from "joi";
export const userSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    storesId: Joi.number().required()
});
//# sourceMappingURL=userSchema.js.map