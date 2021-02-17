const {Schema, model} = require("mongoose");
const Joi = require('joi');
const schema = new Schema({
    id: {
        type: Number
    },
    userName: {
        type: String,
        min: 4,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});

exports.schemaValidation = (user) => {
    const validateschema = schema.object().keys({
        id: Joi.number(),
        userName: Joi.string().required().min(4),
        email: Joi.string().required(),
    })
    return validateschema.validate(user);
}
exports.user = model('user', schema);
