import Joi from "joi";

export const CarValidator = Joi.object({
    brand: Joi.string()
        .pattern( new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).required()
        .min(1).required()
        .max(20).required()
        .messages({
            'string.pattern.base': "Does not match the expectation",
            "string.min":"Minimum length 1",
            "string.max":"Maximum length 20"
        }),
    price: Joi.number()
        .min(0)
        .max(1000000)
        .messages({
            "number.min": "The price is lower than expected, min: 0",
            "number.max": "The price is lower than expected, max: 1000000"
        }),

    year: Joi.number()
        .min(1990)
        .max(2024)
        .messages({
            "number.min": "The year is smaller than expected, min: 1990",
            "number.max": "The year is bigger than expected, max: 2024"
        })
})