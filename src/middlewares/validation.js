const Joi = require('joi');

const productCheck = Joi.object({
  name: Joi.string().min(5).required(),
}).required().messages({
  'any.required': '{#label} is required',
  'string.empty': '{#label} is required',
  'string.min': '{#label} length must be at least 5 characters long',
});

const validateName = async (req, res, next) => {
  const { name } = req.body;
  const { error } = productCheck.validate({ name });
  if (!name) return res.status(400).json({ message: error.details[0].message });
  if (error) {
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
};

module.exports = validateName;
