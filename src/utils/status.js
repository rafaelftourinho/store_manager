const status = {
  'any.required': 400,
  'string.empty': 400,
  'number.min': 422,
  'string.min': 422,
  HTTP_OK: 201,
  NOT_FOUND: 404,
  'number.exist': 404,
};

module.exports = status;
