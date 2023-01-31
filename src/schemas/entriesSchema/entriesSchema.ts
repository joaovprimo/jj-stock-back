import Joi from "joi";

export const entriesSchema = Joi.object({
    name: Joi.string().required(),
    quantity: Joi.number().required(),
    fiscalNote: Joi.string().required(),
    provider: Joi.string().required(),
    receiveDate: Joi.string().required(),
    size: Joi.string().required()
});