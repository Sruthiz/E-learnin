const Joi = require('joi');

module.exports.courseSchema = Joi.object({
    listing : Joi.object({
        title:Joi.string().required(),
        discription : Joi.string().required(),
        price:Joi.number().required().min(0),
        category:Joi.string().required(),
        level:Joi.string().required(),
        popularity:Joi.number().required(),
        image:Joi.string().allow("",null),
    }
    ).required()
});

module.exports.reviewSchema=Joi.object({
    review: Joi.object({
        rating:Joi.number().required().min(1).max(5),
        comment:Joi.string().required(),

    }).required(),
})